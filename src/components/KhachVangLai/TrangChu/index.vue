<template>


  <div class="row">
    <div class="col-lg-5 mt-3">
      <h1 class="text-start py-5 text-light fade-in-up"><b>Chào mừng bạn đến với </b><br><b class="text-twitter"
          style="font-size: 100px;">NFT</b>
        <b style="font-size: 50px;" class="text-sky-light"> CERTIFICATE</b>
      </h1>
      <br>
      <div style="width: 80px; height: 2px; background-color: #b28b66; margin: 0 auto 20px auto;"></div>
      <p class="text-start intro-description fade-in-up ">"Học thật - Bằng thật - Xác minh tức thì"</p>
      <hr class="text-white">
      <p class="text-start intro-description fade-in-up text-center">"An toàn - Bảo mật - Không thể làm giả"</p>
      <hr class="text-white">
      <p class="text-start intro-description fade-in-up text-end">"Chứng chỉ số - Thành tựu mãi mãi"</p>
      <div class="text-end">
        <router-link to="/khach-vang-lai/gioi-thieu" @click="scrollToTop">
          <button class="btn btn-inverse-info rounded-pill  mt-4 me-5 fade-in-up" style="font-size: 0.9rem;">Tìm hiểu
            thêm
            <i class="fa-solid fa-arrow-right" style="font-size: 1.2rem;"></i></button>
        </router-link>

      </div>

    </div>
    <div class="col-lg-7">
      <div class="container my-4">
        <video class="video-no-controls video-rounded fade-in" autoplay loop muted playsinline>
          <source src="../../../assets/images/slide/10047152.mp4" type="video/mp4">
          Trình duyệt của bạn không hỗ trợ video.
        </video>
      </div>

    </div>
  </div>



  <br><br>
  <div class="row">
    <div class="col-lg-4">
      <img class="hover-effect rounded-3" src="../../../assets/images/slide/bl5.jpg"
        style="height: 250px; width: 100%;">

    </div>
    <div class="col-lg-4">
      <img class="hover-effect rounded-3"
        src="https://wallpapers.com/images/high/blockchain-shaded-green-aypnz289nt5auyht.webp"
        style="height: 250px; width: 100%;">
    </div>
    <div class="col-lg-4">
      <img class="hover-effect rounded-3" src="https://wallpapers.com/images/high/nft-background-s5a2ljneovg0zmg0.webp"
        style="height: 250px; width: 100%;">
    </div>
  </div>
  <br><br>
  <hr class="mt-5">
  <br>

  <br>
  <div class="row mt-5" id="certificate">
    <div class="col-lg-3">
      <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
        alt="Học viên 1" class="main-img ms-5" style="width: 300px; height: 300px;">

    </div>
    <div class="col-lg-9">
      <div class="row">
        <div class="col-lg-4">
          <h3 class="text-light"><b class="text-info">AN TOÀN</b> - <b class="text-warning">BẢO MẬT</b></h3>
          <h3 class="text-2"><b>KHÔNG THỂ LÀM GIẢ</b></h3>
        </div>
        <div class="col-lg-8">
          <p class="intro-description">Chúng tôi cung cấp dịch vụ chứng nhận học vấn cho các tổ chức cấp chứng chỉ,
            trường học và cá nhân. Bạn có
            thể dẽ dàng tạo và quản lý chứng chỉ của mình trên nền tảng của chúng tôi</p>
        </div>
        <div class="col-lg-4 mt-2">
          <div class="card card-dark">
            <div class="card-body text-center">
              <img
                src="https://cdn-icons-png.freepik.com/256/7976/7976823.png?uid=R196496169&ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                style="height: 70px;" alt="">
              <h4 class="card-title mt-2 text-light">NFT Chứng Chỉ</h4>
              <p class="card-subtitle mb-2 text-body-secondary text-light">Chứng chỉ độc nhất – xác thực tức thì.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-2">
          <div class="card card-dark">
            <div class="card-body text-center">
              <img
                src="https://cdn-icons-png.freepik.com/256/4713/4713258.png?uid=R196496169&ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                style="height: 70px;" alt="">
              <h4 class="card-title mt-2 text-light">Gửi Yêu Cầu</h4>
              <h6 class="card-subtitle mb-2 text-body-secondary text-light">Một lần gửi – mãi mãi xác thực.</h6>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-2">
          <div class="card card-dark">
            <div class="card-body text-center">
              <img
                src="https://cdn-icons-png.freepik.com/256/11442/11442748.png?uid=R196496169&ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                style="height: 70px;" alt="">
              <h4 class="card-title mt-2 text-light">Bảo Mật</h4>
              <h6 class="card-subtitle mb-2 text-body-secondary text-light">Dữ liệu vĩnh viễn -riêng tư tối
                đa.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br><br>
  <hr class="mt-5">
  <h2 class="text-center mt-5 text-light"><b>CÁC CHỨNG CHỈ ĐÃ ĐƯỢC CẤP NFT</b></h2>
  <div class="position-relative mt-5">
    <!-- Nút cuộn trái -->
    <button class="btn btn-phu position-absolute top-50 start-0 translate-middle-y rounded-btn" style="z-index: 10;"
      @click="scrollLeft">
      ‹
    </button>

    <!-- Dãy ảnh cuộn ngang -->
    <div ref="scrollContainer" class="d-flex overflow-auto gap-3 px-5 scroll-snap">
      <div v-for="(image, index) in imageList" :key="index" class="card" style="min-width: 18rem;">
        <img :src="image" class="card-img-top" style="height: 200px; width: 100%;">
      </div>
    </div>

    <!-- Nút cuộn phải -->
    <button class="btn btn-phu position-absolute top-50 end-0 translate-middle-y z-3 rounded-btn" @click="scrollRight">
      ›
    </button>
  </div>


  <hr class="mt-5">
  <br>
  <h2 class="text-center mt-5 text-light"><b>TIN TỨC VÀ BÀI VIẾT</b></h2><br>
  <div class="row mt-4">
    <div class="col-md-3 mb-4" v-for="(article, index) in articles" :key="index">
      <div class="card h-100 d-flex flex-column">
        <img :src="article.image" class="card-img-top" alt="Ảnh bài viết" style="height: 185px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title equal-title">{{ article.title }}</h5>
          <br>
          <p class="card-text equal-text">{{ article.description }}</p>
          <a :href="article.link" class="btn btn-chinh btn-sm rounded-btn mt-auto" style="width: 30%;"
            target="_blank">Đọc
            thêm</a>
        </div>
      </div>
    </div>
  </div>
  <br>
  <hr class="mt-5">
  <div class="card mt-5 card-dark">
    <div class="card-body">
      <h3 class="text-center mt-5 text-light"><b>TIỆN ÍCH KHI SỬ DỤNG CÔNG NGHỆ CỦA CHÚNG TÔI</b></h3>
      <div class="row mt-3">
        <div class="col-lg-4 text-center">
          <button class="btn btn-phu mt-3 btn-circle mx-auto" style="width: 70px; height: 70px; border-radius: 50%;">
            <i class="ms-1 fa-solid fa-thumbs-up" style="font-size: 35px;"></i>
          </button>
          <h4 class="mt-3 text-light">Tại sao chọn chúng tôi?</h4>
          <p class="intro-description">Chúng tôi áp dụng công nghệ Blockchain và NFT
            <br>
            hiện đại để đảm bảo chứng chỉ học vấn không thể làm giả, minh bạch và có thể xác minh toàn cầu.
          </p>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn btn-phu mt-3 btn-circle mx-auto" style="width: 70px; height: 70px; border-radius: 50%;"><i
              class="ms-1 fa-solid fa-people-group" style="font-size: 35px;"></i></button>
          <h4 class="mt-3 text-light">Chúng tôi làm gì?</h4>
          <p class="intro-description">Chúng tôi cung cấp nền tảng số hóa chứng chỉ học tập dưới dạng NFT,
            giúp sinh viên và nhà tuyển dụng xác thực thông tin một cách nhanh chóng và chính xác.</p>
        </div>
        <div class="col-lg-4 text-center">
          <button class="btn btn-phu mt-3 btn-circle mx-auto" style="width: 70px; height: 70px; border-radius: 50%;"><i
              class="ms-1 fa-solid fa-gear" style="font-size: 35px;"></i></button>
          <h4 class="mt-3 text-light">Chúng tôi là ai?</h4>
          <p class="intro-description">Là một đội ngũ trẻ trung, sáng tạo và đầy nhiệt huyết,
            <br>
            chúng tôi kết nối giáo dục với công nghệ để tạo ra <br>một hệ sinh thái chứng nhận học vấn đáng tin cậy.
          </p>
        </div>
      </div>
      <br>
    </div>
    <br>
    <br>
  </div>


</template>
<script>

export default {
  data() {
    return {
      articles: [
        {
          title: "Nghiên cứu tình huống: Các tổ chức giáo dục sử dụng thông tin xác thực NFT và Blockchain",
          image: "https://public.bnbstatic.com/static/academy/uploads/713b95b5c3e942098f007729ba4a231b.png",
          description: " Bài viết phân tích các nghiên cứu điển hình về việc các tổ chức giáo dục sử dụng NFT và blockchain để cấp chứng chỉ, nhằm hiểu rõ tác động sâu sắc của chúng đối với việc chứng nhận và sự tham gia của sinh viên.",
          link: "https://credly.study/blog/case-studies-nft-credentials-education?utm_source=chatgpt.com"
        },
        {
          title: "NFTCert: Đơn giản hóa việc tạo và xác minh chứng chỉ bằng Blockchain và NFT",
          image: "https://credly.study/images/blog/520-blockchain-educational-institutions.webp",
          description: "Nghiên cứu này trình bày phương pháp tích hợp liền mạch công nghệ blockchain và NFT vào quy trình quản lý và xác thực chứng chỉ, nhằm tạo ra một hệ thống an toàn và hiệu quả.",
          link: "https://www.ijraset.com/research-paper/nftcert-streamlining-certificate-creation-and-verification?utm_source=chatgpt.com"
        },
        {
          title: "Sử dụng Blockchain, NFT và Chứng chỉ số để có tính xác thực và bảo vệ dữ liệu vô song trong Mã nguồn: Đánh giá có hệ thống",
          image: "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/05/nft-la-gi-thumnal.jpg",
          description: "Nghiên cứu này khám phá cách sử dụng blockchain, NFT và chứng chỉ kỹ thuật số để cấp chứng chỉ học thuật, đồng thời đề xuất nghiên cứu tương lai về việc sử dụng các giải pháp blockchain được hỗ trợ bởi HSM để tăng cường tính toàn vẹn của chứng chỉ học thuật.",
          link: "https://www.mdpi.com/2073-431X/14/4/131?utm_source=chatgpt.com"
        },
        {
          title: "Hệ thống chia sẻ chứng chỉ sinh viên sử dụng Blockchain và NFT",
          image: "https://cdnphoto.dantri.com.vn/8Uy1kUtIuiVgKOXordOB9dlZT6o=/2025/02/26/cong-nghe-blockchain-1-1740508906920.jpg",
          description: "Bài viết đề xuất một hệ thống chia sẻ chứng chỉ dựa trên blockchain, cho phép sinh viên kiểm soát và chia sẻ chứng chỉ học thuật của mình thông qua NFT. ",
          link: "https://link.springer.com/chapter/10.1007/978-3-031-45155-3_7?utm_source=chatgpt.com"
        }
      ],
      imageList: [
        'https://lambangcacloai247.com/wp-content/uploads/2022/08/lam-bang-dai-hoc-uy-tin-tphcm-1024x744.jpg',
        'https://lambangdaihocphoithat.com/wp-content/uploads/2022/09/lam-bang-dai-hoc-su-pham-ky-thuat-tphcm-1024x766.jpg',
        'https://vbcc.haui.edu.vn/images?sc=3838a49886&b=DA10860',
        'https://vced.edu.vn/wp-content/uploads/2020/01/452c940dd3402b1e7251.jpg',
        'https://chungchitienganhtinhoc.net/wp-content/uploads/2022/12/mau-chung-chi-tieng-anh-b2-dh-sp-ha-noi.jpg',
        'https://thaylongtoeic.com/wp-content/uploads/2023/12/anh-the-3x4-1.jpg',
        'https://lambangdaihocphoithat.com/wp-content/uploads/2021/04/lam-bang-toeic-iig.jpg',
        'https://anhnguthienan.edu.vn/wp-content/uploads/2024/10/so-hieu-chung-chi-toeic-1.jpeg',
        'https://thetoeiclab.vn/wp-content/uploads/2024/01/bang-toeic.webp',
        'https://tienganhmoingay.com/media/images/uploads/2022/01/25/280122-2.PNG',
        'https://tienganhmoingay.com/media/images/uploads/2021/12/03/031221-2.png',
        'https://nhanlambangtq.com/wp-content/uploads/2017/08/lam-bang-toeic-2022.jpg'
      ]
    }
  },
  methods: {
    scrollLeft() {
      this.$refs.scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    },
    scrollRight() {
      this.$refs.scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    },

    // Load đến đầu trang giới thiệu
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });  // Cuộn lên đầu trang
    }
  },
  mounted() {
    setInterval(() => {
      const container = this.$refs.scrollContainer;
      if (container) {
        // Nếu đã cuộn gần đến cuối, quay lại đầu
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);
  }
}
</script>
<style scoped>
.scroll-snap::-webkit-scrollbar {
  display: none;
}

.scroll-snap {
  -ms-overflow-style: none;
  /* IE, Edge */
  scrollbar-width: none;
  /* Firefox */
}

/* ảnh nền */
.image-container {
  position: relative;
  width: fit-content;
  display: inline-block;
}

.main-img {
  width: 350px;
  border-radius: 15px;
}

.overlay-img {
  position: absolute;
  bottom: 10px;
  right: -60px;
  width: 180px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.certified-badge {
  position: absolute;
  top: -30px;
  left: -30px;
  width: 100px;
  opacity: 0.9;
}

.custom-title {
  font-family: 'Arial', cursive;
  font-size: 32px;
  color: #333;
}

/* css nút btn */
.rounded-btn {
  border-radius: 20px;
  /* Hoặc 12px tùy bạn thấy đẹp */

}

.btn-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 20px;
}

/* css phần nội dung và tiêu đề của bài báo */
.equal-title {
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.equal-text {
  font-size: 0.9rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

/* css chữ */
.intro-description {
  color: #cccccc;
  /* Màu sáng hơn, dễ đọc hơn */
  font-size: 15px;
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;
}


/* css card */
.card-dark {
  border: 1px solid gray;
  border-radius: 0.5rem;
  background-color: #111 !important;
  /* hoặc bg-dark */
  transition: border-color 0.3s ease;
  box-shadow: none;
  /* bỏ viền mờ */
}

.card:hover {
  border-color: white;
}

/* Chuyển động của dòng chữ đầu trang */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease-out forwards;
}

.fade-delay-1 {
  animation-delay: 0.3s;
}

.fade-delay-2 {
  animation-delay: 0.6s;
}

.fade-delay-3 {
  animation-delay: 0.9s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  animation: slideInRight 1s ease-out forwards;
}

.slide-delay-1 {
  animation-delay: 0.3s;
}

.slide-delay-2 {
  animation-delay: 0.6s;
}

.slide-delay-3 {
  animation-delay: 0.9s;
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.video-no-controls {
  width: 100%;
  height: auto;
  border: none;
  outline: none;
  object-fit: cover;
  display: block;
  pointer-events: none;
  /* Ngăn click vào video */
}

.video-rounded {
  width: 100%;
  height: auto;
  border-radius: 15px;
  border: none;
  outline: none;
  object-fit: cover;
  display: block;
  pointer-events: none;
  overflow: hidden;
  opacity: 0;
  /* Bắt đầu từ trong suốt */
  transition: opacity 1.5s ease;
  /* Thời gian chuyển đổi */
}

.fade-in {
  opacity: 1;
  /* Trở nên rõ ràng */
}
</style>