import * as uuid from 'uuid';
import * as path from 'path';
import { StorageService } from 'src/storage/storage.service';

export function generateFileName(originalName: string) {
    const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
    const uniqueId = uuid.v1().slice(0, 8);
    const extension = path.extname(originalName);
    return `${timestamp}_${uniqueId}${extension}`;
}

export function generateStoragePath(file: Express.Multer.File) {
    return `media/${generateFileName(file.originalname)}`;
}

export function getFileMimeType(file: Express.Multer.File) {
    return file.mimetype;
}

export function getFileBuffer(file: Express.Multer.File) {
    return file.buffer;
}

export function generateStorageMetadata(file: Express.Multer.File) {
    return [
        {
            mediaId: generateFileName(file.originalname)
        }
    ];
}

export function generateStorageParams(file: Express.Multer.File) {
    return {
        storagePath: generateStoragePath(file),
        mimeType: getFileMimeType(file),
        buffer: getFileBuffer(file),
        metadata: generateStorageMetadata(file)
    };
}

export async function uploadFileToStorage(
    file: Express.Multer.File,
    storageService: StorageService
) {
    if (!file) return undefined;
    const { storagePath, mimeType, buffer, metadata } =
        generateStorageParams(file);
    return await this.storageService.save(
        storagePath,
        mimeType,
        buffer,
        metadata
    );
}
