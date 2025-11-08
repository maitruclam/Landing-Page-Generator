# Landing Page Generator - KAT-Coder-Pro-V1

Một công cụ tạo landing page tiên tiến, hiện đại sử dụng API KAT-Coder-Pro-V1 để tạo các trang web chuyên nghiệp chỉ with vài thao tác đơn giản. Với giao diện Neumorphism kết hợp Google Playbook, công cụ mang lại trải nghiệm người dùng tuyệt vời.

## Tính năng chính

- **Giao diện hai phần**: Thanh bên and màn hình chính with phong cách Neumorphism
- **Lưu trữ API Key**: Tự động lưu API key into localStorage
- **Quản lý API Key**: Hiển thị/ẩn, lưu, xóa API key with nút check trạng thái
- **50+ phong cách thiết kế**: Bộ sưu tập phong cách thiết kế đa dạng from Minimalism đến Cyberpunk
- **Tự động tạo prompt**: Nút ngôi sao tạo prompt ngẫu nhiên when cần cảm hứng
- **Preview phong cách**: Xem trước trực tiếp các phong cách before chọn
- **Prompt mô tả**: Nhập chi tiết about landing page mong muốn
- **Tạo landing page**: Gọi API để tạo code HTML hoàn chỉnh
- **Giao diện loading sống động**: Hiệu ứng code đang chạy thay vì thông báo nhàm chán
- **Xem trước trực tiếp**: Hiển thị landing page đã tạo ngay trên giao diện
- **Chế độ xem**: Chuyển đổi between preview and code
- **Xuất file**: Tải về file HTML hoàn chỉnh

## Cấu trúc file

```
landingpage/
├── index.html          # Trang chủ
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Cài đặt and sử dụng

### 1. Cài đặt

Không need cài đặt gì cả! Chỉ need mở file `index.html` trong trình duyệt.

### 2. Cấu hình API

1. **Chuẩn bị API Key**: Đảm bảo bạn có API key KAT-Coder-Pro-V1 hợp lệ
2. **Nhập API Key**: Dán API key vào trường "KAT-Coder-Pro-V1 API Key" trong thanh bên

### 3. Sử dụng

1. **Quản lý API Key**:
   - Dán API key into ô nhập liệu
   - Nhấn nút 💾 để lưu API key (tự động lưu vào localStorage)
   - Sử dụng nút "Hiển thị/Ẩn" để xem hoặc ẩn API key
   - Nhấn "Xóa" để xóa API key đã lưu
   - Nút check màu xanh hiển thị trạng thái kết nối

2. **Chọn phong cách**: Chọn một trong 50+ phong cách thiết kế:
   - **Auto**: AI tự động chọn phong cách phù hợp
   - **Minimalism**: Tối giản, whitespace, form đơn giản
   - **Material Design**: Google's design system, cards, shadows
   - **Glassmorphism**: Frosted glass, blurred backgrounds
   - **Neumorphism**: Soft embossed surfaces, subtle shadows
   - **Brutalism**: Raw, concrete textures, bold typography
   - **Cyberpunk**: Sci-fi, neon accents, futuristic
   - **Và 40+ phong cách khác**: Flat, Retro, Art Deco, v.v.

3. **Tạo cảm hứng**: Sử dụng nút ngôi sao ⭐ để create prompt ngẫu nhiên
   - Nhấn vào nút ngôi sao bên cạnh ô mô tả
   - Prompt ngẫu nhiên will be điền tự động
   - Có thể chỉnh sửa prompt after when điền

4. **Mô tả website**: Nhập chi tiết about landing page bạn muốn tạo
   - Mô tả sản phẩm/dịch vụ
   - Màu sắc mong muốn
   - Tính năng cần có
   - Đối tượng khách hàng
   - Phong cách mong muốn

5. **Xem trước phong cách**: Di chuột qua các phong cách để xem preview
   - Preview hiển thị trực tiếp when chọn phong cách
   - Xem mô tả chi tiết về từng phong cách

6. **Tạo landing page**: Nhấn nút "Tạo Landing Page" and chờ kết quả
   - Giao diện loading hiển thị hiệu ứng code đang chạy
   - Thời gian chờ trở nên thú vị hơn

7. **Xem kết quả**:
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

- **Responsive Design**: Giao diện thích ứng with mọi kích cỡ màn hình
- **Real-time Validation**: Kiểm tra API key ngay when nhập
- **Error Handling**: Xử lý lỗi API and thông báo rõ ràng
- **Code Extraction**: Tự động trích xuất code HTML from response
- **Notification System**: Thông báo trạng thái hoạt động
- **Dark Code Editor**: Hiển thị code with nền tối dễ đọc
- **Style Preview System**: Xem trước trực tiếp các phong cách thiết kế
- **Random Prompt Generator**: Tạo prompt ngẫu nhiên with nút ngôi sao
- **Dynamic Loading Animation**: Hiệu ứng code đang chạy when chờ API
- **LocalStorage Integration**: Lưu trữ API key and cài đặt người dùng
- **Multi-style Support**: Hỗ trợ 50+ phong cách thiết kế khác nhau
- **Auto-style Detection**: AI tự động chọn phong cách phù hợp

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
4. Thử lại with prompt đơn giản hơn

## Cập nhật

- **v1.0.0**: Phát hành ban đầu
  - Giao diện hai phần
  - 6 phong cách thiết kế
  - Tích hợp API KAT-Coder-Pro-V1
  - Chức năng xem trước, sao chép, xuất file

- **v1.1.0**: Cập nhật lớn
  - **Nâng cấp giao diện**: Thiết kế lại with phong cách Neumorphism kết hợp Google Playbook
  - **Mở rộng phong cách**: Tăng from 6 lên 50+ phong cách thiết kế
  - **Tự động tạo prompt**: Thêm nút ngôi sao tạo prompt ngẫu nhiên
  - **Preview phong cách**: Xem trước trực tiếp các phong cách before chọn
  - **Loading animation**: Hiệu ứng code đang chạy thay vì thông báo nhàm chán
  - **Cải thiện UI/UX**: Nút check trạng thái, thiết kế hiện đại, responsive tốt hơn
  - **Tối ưu hóa hiệu suất**: Loading nhanh hơn, xử lý lỗi tốt hơn
  - **Cập nhật documentation**: README đầy đủ, hướng dẫn chi tiết

## Liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, vui lòng tạo issue trên repository hoặc liên hệ trực tiếp.

---

**Lưu ý**: Công cụ này yêu cầu API key KAT-Coder-Pro-V1 hợp lệ để hoạt động. Vui lòng đảm bảo bạn có quyền truy cập vào API trước when sử dụng.
