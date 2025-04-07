import PyPDF2
import os
import json
import fitz  # PyMuPDF

def read_pdf_text(file_path):
    """提取PDF文本內容"""
    try:
        with open(file_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""
            for page in pdf_reader.pages:
                text += page.extract_text() or ""
            return text
    except Exception as e:
        return f"提取PDF文本時出錯: {str(e)}"

def extract_pdf_images(file_path, output_dir="public/pdf-images"):
    """提取PDF中的圖片"""
    try:
        # 確保輸出目錄存在
        os.makedirs(output_dir, exist_ok=True)
        
        # 打開PDF文件
        doc = fitz.open(file_path)
        image_list = []
        
        # 遍歷每一頁
        for page_index in range(len(doc)):
            # 獲取當前頁面
            page = doc[page_index]
            
            # 獲取頁面上的圖片
            image_list = page.get_images(full=True)
            
            # 遍歷圖片列表
            for image_index, img in enumerate(image_list):
                # 獲取圖片的xref
                xref = img[0]
                
                # 提取圖片
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                
                # 獲取圖片擴展名
                image_ext = base_image["ext"]
                
                # 保存圖片
                image_filename = f"{output_dir}/page{page_index+1}_img{image_index+1}.{image_ext}"
                with open(image_filename, "wb") as image_file:
                    image_file.write(image_bytes)
                
                print(f"已保存圖片: {image_filename}")
        
        return f"已提取圖片到 {output_dir} 目錄"
    except ImportError:
        return "請安裝PyMuPDF庫: pip install PyMuPDF"
    except Exception as e:
        return f"提取圖片時出錯: {str(e)}"

def save_content_to_json(text, output_file="pdf_content.json"):
    """將PDF內容保存為JSON文件"""
    try:
        content = {
            "title": "PDF內容",
            "text": text,
            "paragraphs": text.split('\n\n')  # 按段落分割
        }
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(content, f, ensure_ascii=False, indent=2)
        
        return f"內容已保存到 {output_file}"
    except Exception as e:
        return f"保存JSON時出錯: {str(e)}"

# 主要執行函數
def process_pdf(pdf_path):
    print("開始處理PDF...")
    
    # 提取文本
    text = read_pdf_text(pdf_path)
    print("文本提取完成")
    
    # 保存為JSON
    save_result = save_content_to_json(text)
    print(save_result)
    
    # 提取圖片
    try:
        image_result = extract_pdf_images(pdf_path)
        print(image_result)
    except Exception as e:
        print(f"提取圖片時出錯: {str(e)}")
    
    return text

# 執行腳本
if __name__ == "__main__":
    pdf_path = "c:\\Users\\jill.chung\\CascadeProjects\\astro-project\\public\\a.pdf"
    content = process_pdf(pdf_path)
    print("\n提取的PDF內容預覽:")
    print(content[:500] + "..." if len(content) > 500 else content)
