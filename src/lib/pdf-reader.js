import pdf from 'pdf-parse';

export async function readPDF(file) {
  try {
    const data = await pdf(file);
    return data.text;
  } catch (error) {
    console.error('Error reading PDF:', error);
    throw error;
  }
}
