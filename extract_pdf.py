import PyPDF2
import json

def read_pdf(file_path):
    try:
        with open(file_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""
            for page in pdf_reader.pages:
                text += page.extract_text()
            return text
    except Exception as e:
        return f"Error reading PDF: {str(e)}"

# Read the PDF content
pdf_text = read_pdf("c:\\Users\\jill.chung\\CascadeProjects\\astro-project\\public\\a.pdf")

# Save the content to a JSON file
content = {
    "title": "PDF Content",
    "text": pdf_text
}

with open('content.json', 'w', encoding='utf-8') as f:
    json.dump(content, f, ensure_ascii=False, indent=2)

print("PDF content has been extracted and saved to content.json")
