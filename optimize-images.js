const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = 'public/assets';
const outputFolder = 'public/imageOptimizased';

// Crear la carpeta de salida si no existe
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

// Función para convertir imágenes a formato WEBP
const convertToWebp = async (inputPath, outputPath) => {
    try {
        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
        console.log(`Converted ${inputPath} to ${outputPath}`);
    } catch (error) {
        console.error(`Error converting ${inputPath}:`, error);
    }
};

// Recorrer todos los archivos en la carpeta de entrada
fs.readdir(inputFolder, (err, files) => {
    if (err) {
        console.error('Error reading input folder:', err);
        return;
    }

    files.forEach(file => {
        const inputPath = path.join(inputFolder, file);
        const outputPath = path.join(outputFolder, path.parse(file).name + '.webp');

        // Verificar si el archivo es una imagen JPG o PNG
        if (file.match(/\.(jpe?g|png)$/i)) {
            convertToWebp(inputPath, outputPath);
        }
    });
});
