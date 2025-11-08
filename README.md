# Landing Page Generator - KAT-Coder-Pro-V1

Một công cụ tạo landing page đơn giản, hiện đại sử dụng API KAT-Coder-Pro-V1 để tạo các trang web chuyên nghiệp chỉ với vài cú nhấp chuột.

## Tính năng chính

- **Giao diện hai phần**: Thanh bên and màn hình chính
- **Lưu trữ API Key**: Tự động lưu API key vào localStorage
- **Quản lý API Key**: Hiển thị/ẩn, lưu, xóa API key
- **Chọn phong cách**: 6 phong cách thiết kế khác nhau
- **Prompt mô tả**: Nhập chi tiết about landing page mong muốn
- **Tạo landing page**: Gọi API để tạo code HTML hoàn chỉnh
- **Xem trước trực tiếp**: Hiển thị landing page đã tạo ngay trên giao diện
- **Chế độ xem**: Chuyển đổi giữa preview và code
- **Xuất file**: Tải về file HTML

## Cấu trúc file

```
landingpage/
├── index.html          # Trang chủ
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Cài đặt và sử dụng

### 1. Cài đặt

Không cần cài đặt gì cả! Chỉ cần mở file `index.html` trong trình duyệt.

### 2. Cấu hình API

1. **Chuẩn bị API Key**: Đảm bảo bạn có API key KAT-Coder-Pro-V1 hợp lệ
2. **Nhập API Key**: Dán API key vào trường "KAT-Coder-Pro-V1 API Key" trong thanh bên

### 3. Sử dụng

1. **Quản lý API Key**:
   - Dán API key into ô nhập liệu
   - Nhấn nút 💾 để lưu API key (tự động lưu vào localStorage)
   - Sử dụng nút "Hiển thị/Ẩn" để xem hoặc ẩn API key
   - Nhấn "Xóa" để xóa API key đã lưu

2. **Chọn phong cách**: Chọn một trong 6 phong cách có sẵn:
   - Hiện đại (Modern)
   - Tối giản (Minimalist)
   - Doanh nghiệp (Corporate)
   - Sáng tạo (Creative)
   - Công nghệ (Tech)
   - Thanh lịch (Elegant)

3. **Mô tả website**: Nhập chi tiết about landing page bạn muốn tạo
   - Mô tả sản phẩm/dịch vụ
   - Màu sắc mong muốn
   - Tính năng cần có
   - Đối tượng khách hàng

4. **Tạo landing page**: Nhấn nút "Tạo Landing Page" and chờ kết quả

5. **Xem kết quả**:
   - **Preview**: Xem landing page đã tạo trực tiếp trên giao diện
   - **Code**: Chuyển sang chế độ xem code HTML
   - **Tải xuống**: Nhấn "Tải xuống" để xuất file HTML

## API Integration

Website sử dụng API Vanchin Streamlake theo định dạng:

```bash
curl 'https://vanchin.streamlake.ai/api/gateway/v1/endpoints/chat/completions' \
-H "Authorization: Bearer $VC_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
    "model": "ep-4v42tt-1761622771101927607",
    "messages": [
        {
            "role": "system",
            "content": "You are an AI assistant that creates beautiful landing pages..."
        },
        {
            "role": "user",
            "content": "Your prompt here"
        }
    ]
}'
```

## Giao diện

### Thanh bên (Sidebar)
- **Quản lý API Key**: Nhập, lưu, hiển thị/ẩn, xóa API key
- Chọn phong cách thiết kế
- Ô nhập mô tả chi tiết
- Nút tạo landing page
- Trạng thái kết nối API

### Màn hình chính
- **Welcome Screen**: Hướng dẫn sử dụng
- **Loading Screen**: Hiển thị when đang tạo
- **Preview Container**: Hiển thị landing page dạng preview hoặc code
- **Error Container**: Hiển thị thông báo lỗi

## Tính năng nâng cao

- **Responsive Design**: Giao diện thích ứng với mọi kích cỡ màn hình
- **Real-time Validation**: Kiểm tra API key ngay khi nhập
- **Error Handling**: Xử lý lỗi API và thông báo rõ ràng
- **Code Extraction**: Tự động trích xuất code HTML từ response
- **Notification System**: Thông báo trạng thái hoạt động
- **Dark Code Editor**: Hiển thị code với nền tối dễ đọc

## Yêu cầu hệ thống

- **Trình duyệt**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **JavaScript**: Bật JavaScript
- **Internet**: Kết nối internet để gọi API

## Bảo mật

- API Key được lưu trữ tạm thời trong memory
- Không lưu trữ API Key trên server
- Tất cả request được mã hóa HTTPS

## Hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra API Key có hợp lệ không
2. Kiểm tra kết nối internet
3. Kiểm tra định dạng prompt
4. Thử lại với prompt đơn giản hơn

## Cập nhật

- **v1.0.0**: Phát hành ban đầu
  - Giao diện hai phần
  - 6 phong cách thiết kế
  - Tích hợp API KAT-Coder-Pro-V1
  - Chức năng xem trước, sao chép, xuất file
