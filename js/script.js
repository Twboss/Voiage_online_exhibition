$(document).ready(function() {
    // เรียกใช้ Slick carousel
    $('#slick-section-4').slick({
        dots: true,
        arrows: false,
        infinite: false,
        centerMode: true,
        initialSlide: 0,
        slidesToShow: 3,
        responsive: [{
                breakpoint: 1200, // เมื่อขนาดจอลดลงเป็น 1200px หรือน้อยกว่า
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992, // เมื่อขนาดจอลดลงเป็น 992px หรือน้อยกว่า
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768, // เมื่อขนาดจอลดลงเป็น 768px หรือน้อยกว่า
                settings: {
                    slidesToShow: 1
                }
            }
            // เพิ่มเติมตามต้องการ
        ]
    });
});

$(document).ready(function() {
    function updateLayout() {
        if ($(window).width() < 768) {
            // เปลี่ยนเป็น Slick carousel
            $('.custom-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            });
        } else {
            // แสดงปกติ
            if ($('.custom-slider').hasClass('slick-initialized')) {
                $('.custom-slider').slick('unslick');
            }
        }
    }

    // เรียกใช้ฟังก์ชันเมื่อโหลดหน้าจอหรือปรับขนาดหน้าจอ
    updateLayout();
    $(window).resize(function() {
        updateLayout();
    });
});