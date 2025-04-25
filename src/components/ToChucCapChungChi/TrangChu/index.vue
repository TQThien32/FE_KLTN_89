<template>
    <div class="row">
      <div class="col-lg-5 mt-3">
        <h1 class="text-start mt-5 text-light fade-in-up"><b>Chào mừng bạn đến với </b><br><b class="text-info" style="font-size: 100px;">NFT</b>
           <b style="font-size: 50px;" class="text-primary"> CERTIFICATE</b>
        </h1>
        <br>
        <div style="width: 40px; height: 2px; background-color: #b28b66; margin: 0 auto 20px auto;"></div>
        <p class="text-start intro-description fade-in-up">"Học thật, bằng thật, xác minh tức thì"</p> <hr class="text-white">
        <p class="text-start intro-description fade-in-up">"Hệ thống chứng nhận học vấn bằng NFT là một nền tảng hiện đại..."</p> 
        <div class="text-end">
          <router-link to="/dung-chung/gioi-thieu" @click="scrollToTop">
            <button class="btn btn-outline-primary rounded-pill  mt-2 me-5 fade-in-up" style="font-size: 0.75rem;">Tìm hiểu thêm
              <i class="fa-solid fa-arrow-right"></i></button>
          </router-link>
  
        </div>
          
      </div>
      <div class="col-lg-7">
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-wrap="true" data-bs-interval="3000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img style="height: 450px;" src="../../../assets/images/slide/1.png"
          class="d-block w-100 hover-effect slide-in-right" alt="...">
      </div>
      <div class="carousel-item">
        <img style="height: 450px;" src="../../../assets/images/slide/2.png"
          class="d-block w-100 hover-effect" alt="...">
      </div>
      <div class="carousel-item">
        <img style="height: 450px;" src="../../../assets/images/slide/3.png"
          class="d-block w-100 hover-effect" alt="...">
      </div>
    </div>
  
    <!-- Nút chuyển ảnh trái/phải vẫn giữ nguyên -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
      </div>
    </div>
    <br><br>
    <div class="row">
      <div class="col-lg-4">
        <img class="hover-effect"
          src="https://th.bing.com/th/id/OIP.pLNrLyg3lo552n-hbedu1gHaEK?w=1024&h=576&rs=1&pid=ImgDetMain"
          style="height: 250px; width: 100%;">
  
      </div>
      <div class="col-lg-4">
        <img class="hover-effect"
          src="/src/assets/images/slide/4.png"
          style="height: 250px; width: 100%;">
      </div>
      <div class="col-lg-4">
        <img class="hover-effect" src="https://ooc.vn/wp-content/uploads/2024/12/Blockchain.jpg"
          style="height: 250px; width: 100%;">
      </div>
    </div>
    <br><br>
    <hr class="mt-5">
    <br>
    <div class="row mt-5">
      <div class="col-lg-3">
        <div class="image-container">
          <!-- Ảnh nền lớn -->
          <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
            alt="Học viên 1" class="main-img" style="width: 100%; height: 100%;">
  
          <!-- Ảnh nền nhỏ -->
          <!-- <img src="https://i.imgur.com/mj2sQmj.jpg" alt="Học viên 2" class="overlay-img"> -->
  
          <!-- Logo -->
          <!-- <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
            alt="Certified" class="certified-badge"> -->
        </div>
      </div>
      <div class="col-lg-8">
        <h2 class="custom-title text-light"><b>Giới Thiệu</b></h2>
        <p class="intro-text intro-description">
          Hệ thống chứng nhận học vấn bằng NFT là một nền tảng hiện đại, cho phép xác thực chứng chỉ học tập một cách minh
          bạch, bảo mật và không thể làm giả.
          <br><br>
          Thông qua việc áp dụng công nghệ Blockchain và hợp đồng thông minh (Smart Contract), mỗi chứng chỉ được số hóa
          thành một NFT duy nhất – có thể xác thực nhanh chóng và dễ dàng bởi các tổ chức, nhà tuyển dụng trên toàn cầu.
          <br><br>
          Giải pháp này giúp nâng cao độ tin cậy trong tuyển dụng, học tập, đồng thời thúc đẩy quá trình chuyển đổi số
          trong lĩnh vực giáo dục.
        </p>
        <br>
        <router-link to="/dung-chung/gioi-thieu" @click="scrollToTop"><button class="btn btn-outline-primary rounded-btn" href="index.html">Xem Thêm <i
              class="fa-solid fa-arrow-right"></i></button></router-link>
  
      </div>
    </div>
    <br>
    <hr class="mt-5">
    <br>
    <div class="row mt-5" id="certificate">
      <div class="col-lg-3">
        <h2 class="text-light"><b class="text-light">NFT</b> <b class="text-primary">CERTIFICATE</b></h2>
        <p class="intro-description">Là một nền tảng cung cấp dịch vụ chứng nhận học vấn và bằng cấp bằng công nghệ NFT.
          Chúng tôi cam kết mang đến
          cho bạn những chứng chỉ học vấn chất lượng và an toàn</p>
        <p class="intro-description">Chúng tôi sử dụng công nghệ Blockchain để đảm bảo tính xác thực và không thể làm giả
          của chứng chỉ học vấn. Bạn
          có thể yên tâm rằng chứng chỉ của bạn sẽ được bảo vệ và không thể làm giả</p>
  
      </div>
      <div class="col-lg-9">
        <div class="row">
          <div class="col-lg-4">
            <h3 class="text-light"><b class="text-success">AN TOÀN</b> - <b class="text-danger">BẢO MẬT</b></h3>
            <h3 class="text-light"><b>KHÔNG THỂ LÀM GIẢ</b></h3>
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
      <button class="btn btn-outline-primary position-absolute top-50 start-0 translate-middle-y rounded-btn"
        style="z-index: 10;" @click="scrollLeft">
        ‹
      </button>
  
      <!-- Dãy ảnh cuộn ngang -->
      <div ref="scrollContainer" class="d-flex overflow-auto gap-3 px-5 scroll-snap">
        <div v-for="(image, index) in imageList" :key="index" class="card" style="min-width: 18rem;">
          <img :src="image" class="card-img-top" style="height: 200px; width: 100%;">
        </div>
      </div>
  
      <!-- Nút cuộn phải -->
      <button class="btn btn-outline-primary position-absolute top-50 end-0 translate-middle-y z-3 rounded-btn"
        @click="scrollRight">
        ›
      </button>
    </div>
    <hr class="mt-5">
    <div class="card mt-5 card-dark">
      <div class="card-body">
        <h3 class="text-center mt-5 text-light"><b>TIỆN ÍCH KHI SỬ DỤNG CÔNG NGHỆ CỦA CHÚNG TÔI</b></h3>
        <div class="row mt-3">
          <div class="col-lg-4 text-center">
            <button class="btn btn-outline-primary mt-3 btn-circle mx-auto"
              style="width: 70px; height: 70px; border-radius: 50%;">
              <i class="ms-1 fa-solid fa-thumbs-up" style="font-size: 35px;"></i>
            </button>
            <h4 class="mt-3 text-light">Tại sao chọn chúng tôi?</h4>
            <p class="intro-description">Chúng tôi áp dụng công nghệ Blockchain và NFT
              <br>
              hiện đại để đảm bảo chứng chỉ học vấn không thể làm giả, minh bạch và có thể xác minh toàn cầu.
            </p>
          </div>
          <div class="col-lg-4 text-center">
            <button class="btn btn-outline-primary mt-3 btn-circle mx-auto"
              style="width: 70px; height: 70px; border-radius: 50%;"><i class="ms-1 fa-solid fa-people-group"
                style="font-size: 35px;"></i></button>
            <h4 class="mt-3 text-light">Chúng tôi làm gì?</h4>
            <p class="intro-description">Chúng tôi cung cấp nền tảng số hóa chứng chỉ học tập dưới dạng NFT,
              giúp sinh viên và nhà tuyển dụng xác thực thông tin một cách nhanh chóng và chính xác.</p>
          </div>
          <div class="col-lg-4 text-center">
            <button class="btn btn-outline-primary mt-3 btn-circle mx-auto"
              style="width: 70px; height: 70px; border-radius: 50%;"><i class="ms-1 fa-solid fa-gear"
                style="font-size: 35px;"></i></button>
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
    <br>
    <div class="row text-center mt-4">
      <div class="col-lg-3">
        <div class="card-body" style="border: 1px solid white; border-radius: 8px;">
          <img class="mt-4" src="https://cdn-icons-png.flaticon.com/512/609/609803.png" alt="icon" width="50">
          <h5 class="mt-2 fw-bold text-white">Chứng chỉ số an toàn</h5>
          <p class="text-light">Chứng chỉ NFT không thể làm giả, đảm bảo xác thực tuyệt đối.</p>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card-body" style="border: 1px solid white; border-radius: 8px;">
          <i class="fa-solid fa-microphone mt-4" style="font-size: 50px;"></i>
            <h5 class="mt-2 fw-bold text-white">Truy xuất dễ dàng</h5>
            <p class="text-light">Người học, tổ chức và nhà tuyển dụng có thể kiểm tra mọi lúc.</p>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card-body" style="border: 1px solid white; border-radius: 8px;">
          <img class="mt-4" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="icon" width="50">
            <h5 class="mt-2 fw-bold text-white">Lưu trữ vĩnh viễn</h5>
            <p class="text-light">Chứng chỉ được lưu trữ trên blockchain, không bị mất hay hư hỏng theo thời gian.</p>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card-body" style="border: 1px solid white; border-radius: 8px;">
          <img class="mt-4" src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="icon" width="50">
            <h5 class="mt-2 fw-bold text-white">Hỗ trợ 24/7</h5>
            <p class="text-light">Luôn sẵn sàng tư vấn và xử lý mọi thắc mắc về chứng chỉ.</p>
        </div>
      </div>
    </div>
   
  </template>
  <script>
  
  export default {
    data() {
      return {
        articles: [
          {
            title: "Nghiên cứu tình huống: Các tổ chức giáo dục sử dụng thông tin xác thực NFT và Blockchain",
            image: "https://credly.study/images/blog/520-case-studies-nft-education.webp",
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
            image: "https://media.springernature.com/w316/springer-static/cover-hires/book/978-3-031-45155-3?as=webp",
            description: "Bài viết đề xuất một hệ thống chia sẻ chứng chỉ dựa trên blockchain, cho phép sinh viên kiểm soát và chia sẻ chứng chỉ học thuật của mình thông qua NFT. ",
            link: "https://link.springer.com/chapter/10.1007/978-3-031-45155-3_7?utm_source=chatgpt.com"
          }
        ],
        imageList: [
          'https://lambangcacloai247.com/wp-content/uploads/2022/08/lam-bang-dai-hoc-uy-tin-tphcm-1024x744.jpg',
          'https://lambangdaihocphoithat.com/wp-content/uploads/2022/09/lam-bang-dai-hoc-su-pham-ky-thuat-tphcm-1024x766.jpg',
          'https://thaylongtoeic.com/wp-content/uploads/2023/12/anh-the-3x4-1.jpg',
          'https://vbcc.haui.edu.vn/images?sc=3838a49886&b=DA10860',
          'https://vced.edu.vn/wp-content/uploads/2020/01/452c940dd3402b1e7251.jpg',
          'https://chungchitienganhtinhoc.net/wp-content/uploads/2022/12/mau-chung-chi-tieng-anh-b2-dh-sp-ha-noi.jpg',
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
  </style>