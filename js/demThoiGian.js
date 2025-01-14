// const countdown = () => {
//   const endDate = new Date('2025-01-15T00:00:00').getTime();
//   const now = new Date().getTime();
//   const timeLeft = endDate - now;

//   if (timeLeft <= 0) {
//     document.querySelector('.countdown').innerHTML = '<h2>Time is up!</h2>';
//     return;
//   }

//   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//   document.getElementById('days').textContent = days.toString().padStart(2, '0');
//   document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
//   document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
//   document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
// };

// countdown();
// setInterval(countdown, 1000);

const countdown = () => {
    const endDate = new Date('2025-01-15T00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;
  
    // Khi hết thời gian, chuyển hướng
    if (timeLeft <= 0) {
      // window.location.href = ''; // Thay bằng URL bạn muốn chuyển đến
      window.location.href = './pthao.html'; // Chuyển đến file index.html trong thư mục pages
      return;
    }
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  };
  
  countdown();
  setInterval(countdown, 1000);
  
// Bắt sự kiện click vào từng box
const boxes = document.querySelectorAll('.countdown-container');
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    // window.location.href = './pthao.html'; // Chuyển đến file index.html trong thư mục pages
  });
});
  // Giải thích:
  // Kiểm tra thời gian:
  
  // if (timeLeft <= 0) kiểm tra nếu thời gian còn lại bằng hoặc nhỏ hơn 0.
  // Nếu đúng, hàm window.location.href được gọi để chuyển hướng sang URL mới.
  // URL cần chuyển hướng:
  
  // Bạn thay "https://example.com" bằng URL của trang mà bạn muốn chuyển hướng đến.
  // Hành vi sau khi kết thúc:
  
  // Người dùng sẽ được chuyển ngay lập tức sang trang mới khi bộ đếm ngược kết thúc.
  // Lưu ý:
  // Đảm bảo URL trang đích chính xác và người dùng có quyền truy cập.
  // Nếu muốn chuyển sang một tệp HTML khác trong dự án của bạn, thay URL bằng đường dẫn tương đối, ví dụ: 'next-page.html'.
  
  
  //---------sửa thời gian-----
  // Để sửa lại thời gian kết thúc của bộ đếm ngược, bạn chỉ cần chỉnh sửa thời gian trong dòng JavaScript xác định ngày và giờ kết thúc. Cụ thể, tìm dòng này trong file script.js:
  
  // javascript
  // Sao chép mã
  // const endDate = new Date('2025-01-15T00:00:00').getTime();
  // Cách chỉnh sửa:
  // Thay đổi ngày tháng và giờ kết thúc:
  
  // Giá trị '2025-01-15T00:00:00' sử dụng định dạng ISO 8601:
  
  // YYYY-MM-DDTHH:mm:ss
  // YYYY: Năm (ví dụ: 2025).
  // MM: Tháng (01 đến 12).
  // DD: Ngày (01 đến 31).
  // T: Phân tách ngày và giờ.
  // HH:mm:ss: Giờ, phút, giây (sử dụng định dạng 24 giờ).
  // Ví dụ: Nếu bạn muốn thay đổi thời gian kết thúc thành 12h30p ngày 20/02/2025, hãy sửa thành:
  
  // javascript
  // Sao chép mã
  // const endDate = new Date('2025-02-20T12:30:00').getTime();
  // Lưu file script.js:
  
  // Sau khi chỉnh sửa, lưu file và làm mới trang trong trình duyệt để áp dụng thay đổi.
  
  
  
