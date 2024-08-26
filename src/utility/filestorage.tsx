import RNFS from 'react-native-fs'


export async function writeFileToSDCard(data: string) {
   // Path to the file on the SD card
   const path = RNFS.DocumentDirectoryPath + '/sampledata.txt';

     try {
     await RNFS.writeFile(path, data, 'utf8');
     console.log('File written successfully!');
   } catch (error) {
     console.error('Error writing file:', error);
   }
 }
