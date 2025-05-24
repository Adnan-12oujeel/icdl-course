// تغيير خلفية الهيدر عند التمرير
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 90) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// فتح/إغلاق القائمة الجانبية
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

// إغلاق القائمة الجانبية
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

// التعامل مع روابط القائمة الجانبية (في الشاشات الصغيرة)
// عند الضغط على الرابط: إغلاق القائمة ثم التنقل بسلاسة
document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // منع الانتقال الفوري
    const targetId = this.getAttribute("data-target");

    closeSidebar(); // إغلاق القائمة

    // تأخير بسيط للانتقال بعد إغلاق القائمة
    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // يتطابق مع مدة الإغلاق في CSS (0.3s)
  });
});

// إغلاق القائمة عند الضغط على الخلفية
document.getElementById("overlay").addEventListener("click", closeSidebar);



// الايقونات ثلاثية الابعاد =========================================================
AOS.init({ duration: 1000, once: true });