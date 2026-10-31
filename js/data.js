/**
 * Dữ liệu thông tin & chương trình đào tạo chuyên ngành ME-NUT
 * Biên soạn dễ hiểu dành riêng cho học sinh THPT tìm hiểu ngành.
 */
window.MENUT_DATA = {
  quickStats: [
    {
      value: "2,5 + 2",
      unit: "năm linh hoạt",
      label: "2,5 năm nền tảng tại VN, sau đó chọn đi Nhật hoặc học tiếp tại VN"
    },
    {
      value: "Từ số 0",
      unit: "Tiếng Nhật",
      label: "Không cần biết tiếng Nhật từ cấp 3 — được đào tạo bài bản từ bảng chữ cái"
    },
    {
      value: "3 trong 1",
      unit: "Cơ - Điện - Code",
      label: "Làm chủ trọn bộ Cơ khí chính xác, Vi mạch điện tử và Lập trình Robot/AI"
    },
    {
      value: "2 lựa chọn",
      unit: "Bằng cấp giá trị",
      label: "Bằng Đại học Nhật Bản (khi chuyển tiếp) hoặc Bằng chính quy trong nước"
    }
  ],

  pillars: [
    {
      id: "mech",
      title: "Cơ khí chính xác",
      subtitle: "Bộ khung & chuyển động",
      desc: "Thiết kế 3D trên máy tính, tính toán sức bền, bánh răng, khớp nối để cánh tay robot chuyển động mượt và chính xác tới từng milimet.",
      color: "indigo"
    },
    {
      id: "elec",
      title: "Điện tử & Cảm biến",
      subtitle: "Hệ thần kinh & giác quan",
      desc: "Thiết kế bo mạch, kết nối cảm biến quang, siêu âm, camera giúp máy móc 'nhìn', 'cảm nhận' lực, nhiệt độ và khoảng cách xung quanh.",
      color: "cyan"
    },
    {
      id: "code",
      title: "Lập trình & Trí tuệ Robot",
      subtitle: "Bộ não ra quyết định",
      desc: "Viết code C/C++, Python, thuật toán điều khiển tự động và Thị giác máy (Computer Vision) để robot tự hành thông minh.",
      color: "coral"
    },
    {
      id: "jp",
      title: "Tiếng Nhật Kỹ thuật",
      subtitle: "Tấm hộ chiếu toàn cầu",
      desc: "Học tăng cường từ sơ cấp đến trình độ N3–N2 và thuật ngữ chuyên ngành để đọc tài liệu, nghiên cứu tại Nhật hoặc làm việc ở tập đoàn lớn.",
      color: "amber"
    }
  ],

  requirements: {
    admission: {
      badge: "Giai đoạn xét tuyển Đại học",
      title: "Yêu cầu đầu vào (Dành cho học sinh THPT)",
      subtitle: "Cần chuẩn bị gì từ lớp 10, 11, 12 để trúng tuyển mã ngành ME-NUT?",
      items: [
        {
          icon: "exam",
          title: "3 Phương thức xét tuyển chính",
          detail: "Xét tuyển Tài năng (hồ sơ năng lực, chứng chỉ quốc tế, giải HSG), điểm thi Đánh giá tư duy (TSA), hoặc điểm thi Tốt nghiệp THPT.",
          tag: "Đa dạng cơ hội"
        },
        {
          icon: "subjects",
          title: "Tổ hợp môn thế mạnh",
          detail: "Tập trung các tổ hợp khối Khoa học Tự nhiên & Công nghệ như A00 (Toán - Lý - Hóa), A01 (Toán - Lý - Anh) và các tổ hợp xét tuyển theo quy chế hằng năm.",
          tag: "Toán & Lý là cốt lõi"
        },
        {
          icon: "language",
          title: "Không đòi hỏi biết Tiếng Nhật trước",
          detail: "Ở bậc THPT bạn chỉ cần học tốt Tiếng Anh theo tổ hợp xét tuyển (nếu chọn A01/chứng chỉ). Tiếng Nhật sẽ được dạy lại từ đầu ngay Học kỳ 1.",
          tag: "Yên tâm bắt đầu"
        },
        {
          icon: "mindset",
          title: "Tư duy & Sở thích phù hợp",
          detail: "Yêu thích lắp ráp, tò mò cách máy móc tự vận hành, không ngại học ngoại ngữ mới và thích biến công thức Toán - Lý thành sản phẩm thật.",
          tag: "Đúng chất kỹ sư"
        }
      ]
    },
    transfer: {
      badge: "Sau 2,5 năm đầu (Hết Học kỳ 5)",
      title: "Điều kiện xét Chuyển tiếp sang Nhật Bản",
      subtitle: "Muốn sang Đại học Công nghệ Nagaoka (NUT) / trường đối tác Nhật cần đạt gì?",
      items: [
        {
          icon: "credits",
          title: "Hoàn thành trọn vẹn tín chỉ Giai đoạn 1",
          detail: "Tích lũy đủ các môn Toán - Khoa học cơ bản, Cơ sở ngành Cơ điện tử và chuỗi học phần Tiếng Nhật của 5 học kỳ đầu tiên đúng tiến độ.",
          tag: "Nền tảng học thuật"
        },
        {
          icon: "gpa",
          title: "Điểm trung bình tích lũy (GPA) đạt chuẩn",
          detail: "Đạt ngưỡng học lực theo thỏa thuận liên kết giữa hai bên (duy trì GPA Khá - Giỏi từ 2.5 - 3.2/4.0 trở lên còn giúp tăng cơ hội săn học bổng Nhật).",
          tag: "Kết quả rèn luyện"
        },
        {
          icon: "jlpt",
          title: "Chuẩn Tiếng Nhật tương đương JLPT N2 / EJU",
          detail: "Đủ năng lực nghe giảng chuyên ngành, đọc tài liệu Lab bằng tiếng Nhật (thường yêu cầu tương đương N2 hoặc điểm thi lưu học sinh EJU đạt ngưỡng).",
          tag: "Ngoại ngữ chuyển tiếp"
        },
        {
          icon: "interview",
          title: "Vượt qua Phỏng vấn với Giáo sư Nhật Bản",
          detail: "Tham dự kỳ đánh giá năng lực & phỏng vấn trực tiếp do hội đồng Giáo sư từ ĐH Công nghệ Nagaoka / trường đối tác tổ chức hằng năm.",
          tag: "Bước quyết định"
        }
      ]
    }
  },

  fitChecklist: [
    "Mình thích xem hoặc tự mày mò về robot, xe tự hành, tay máy công nghiệp, IoT hoặc in 3D.",
    "Ở trường cấp 3, mình khá hứng thú với môn Toán và phần Cơ học / Điện học của môn Vật lý.",
    "Mình thích viết code nhưng muốn thấy code điều khiển vật thể chuyển động ngoài đời thực.",
    "Mình sẵn sàng học Tiếng Nhật bài bản từ con số 0 để mở rộng cơ hội du học & nghề nghiệp.",
    "Mình muốn có cơ hội đi Nhật nhận bằng quốc tế, nhưng vẫn muốn có phương án học tiếp trong nước thật an toàn nếu kế hoạch thay đổi.",
    "Mình mong muốn ra trường làm kỹ sư R&D, thiết kế máy tự động ở các tập đoàn công nghệ lớn."
  ],

  pathwayComparison: [
    {
      criteria: "Thời gian Giai đoạn 2",
      transfer: "Khoảng 2 – 2,5 năm học tập toàn thời gian tại Nhật Bản (bắt đầu từ Năm 3 hệ ĐH Nhật).",
      nonTransfer: "Khoảng 2 – 2,5 năm tiếp tục tại Việt Nam (hoàn thiện bậc Cử nhân hoặc học tiếp Kỹ sư chuyên sâu)."
    },
    {
      criteria: "Ngôn ngữ giảng dạy chính",
      transfer: "100% Tiếng Nhật học thuật trong giảng đường, phòng thí nghiệm (Lab) và doanh nghiệp Nhật.",
      nonTransfer: "Tiếng Việt kết hợp tài liệu Tiếng Anh chuyên ngành, tiếp tục củng cố Tiếng Nhật giao tiếp kỹ thuật."
    },
    {
      criteria: "Điểm nhấn đào tạo thực chiến",
      transfer: "Sinh hoạt nghiên cứu tại Lab Giáo sư Nhật (Kenkyushitsu) & kỳ thực tập kỹ sư 5 tháng tại công ty Nhật (Jitsumu Kunren).",
      nonTransfer: "Đồ án Thiết kế Hệ thống Cơ điện tử, thực hành Robot công nghiệp - PLC - Thị giác máy & thực tập tại tập đoàn FDI lớn ở VN."
    },
    {
      criteria: "Chi phí & Học bổng",
      transfer: "Học phí theo mức ưu đãi trường công lập Nhật Bản + chi phí sinh hoạt tại Nhật (có cơ hội xét học bổng JASSO, MEXT, học bổng miễn giảm học phí).",
      nonTransfer: "Mức học phí trong nước hợp lý, tiết kiệm toàn bộ chi phí sinh hoạt nước ngoài cho gia đình."
    },
    {
      criteria: "Bằng tốt nghiệp nhận được",
      transfer: "Bằng Cử nhân Kỹ thuật (Bachelor of Engineering) do Đại học Công nghệ Nagaoka (NUT) hoặc ĐH đối tác Nhật Bản cấp.",
      nonTransfer: "Bằng Cử nhân / Kỹ sư Kỹ thuật Cơ điện tử chính quy trong nước, kèm lợi thế ngoại ngữ Tiếng Nhật vượt trội."
    }
  ],

  categories: [
    { id: "all", label: "Tất cả mảng kiến thức" },
    { id: "japanese", label: "Tiếng Nhật & Hội nhập" },
    { id: "math_sci", label: "Toán & Khoa học cơ bản" },
    { id: "mech", label: "Cơ khí & Thiết kế máy" },
    { id: "elec", label: "Điện - Điện tử & Cảm biến" },
    { id: "ctrl_it", label: "Lập trình, Điều khiển & Robot" },
    { id: "project", label: "Thực tập Lab & Đồ án" }
  ],

  courses: [
    // ================= GIAI ĐOẠN CHUNG (HK 1 - 5: CẢ 2 LỘ TRÌNH ĐỀU HỌC) =================
    {
      id: "c01",
      code: "MATH-101",
      name: "Giải tích I, II & Đại số tuyến tính",
      credits: 10,
      stage: "stage1_y1",
      stageLabel: "Năm 1 (HK 1–2)",
      track: "common",
      category: "math_sci",
      summary: "Cung cấp công cụ toán học cốt lõi (ma trận, đạo hàm nhiều biến, phương trình vi phân) để tính toán quỹ đạo cánh tay robot và xử lý tín hiệu.",
      handsOn: "Mô phỏng tọa độ chuyển động không gian 3 chiều của khớp robot trên phần mềm.",
      highSchoolLink: "Nối tiếp trực tiếp kiến thức Giải tích, Hàm số và Hình học Oxyz lớp 12."
    },
    {
      id: "c02",
      code: "PHYS-102",
      name: "Vật lý đại cương I & II (Cơ - Nhiệt - Điện từ)",
      credits: 6,
      stage: "stage1_y1",
      stageLabel: "Năm 1 (HK 1–2)",
      track: "common",
      category: "math_sci",
      summary: "Giải mã các định luật chuyển động lực học, momen quay, từ trường và cảm ứng điện từ — nền móng hoạt động của mọi động cơ và cảm biến.",
      handsOn: "Thí nghiệm đo đạc dao động cơ học, từ trường cuộn dây và mạch dao động trong phòng Lab Vật lý.",
      highSchoolLink: "Mở rộng sâu hơn phần Cơ học lớp 10 và Điện xoay chiều, Cảm ứng điện từ lớp 11–12."
    },
    {
      id: "c03",
      code: "JP-101",
      name: "Tiếng Nhật tăng cường Sơ cấp (Tiếng Nhật 1 – 3)",
      credits: 12,
      stage: "stage1_y1",
      stageLabel: "Năm 1 (HK 1–2)",
      track: "common",
      category: "japanese",
      summary: "Bắt đầu từ bảng chữ cái Hiragana, Katakana, Kanji cơ bản tới giao tiếp đời sống hằng ngày, rèn đầy đủ 4 kỹ năng Nghe - Nói - Đọc - Viết.",
      handsOn: "Thực hành hội thoại trực tiếp trên lớp, thuyết trình ngắn bằng tiếng Nhật về bản thân và đời sống sinh viên.",
      highSchoolLink: "Học mới hoàn toàn từ con số 0 — không yêu cầu biết trước ở THPT."
    },
    {
      id: "c04",
      code: "IT-104",
      name: "Nhập môn Lập trình & Kỹ thuật lập trình C/C++",
      credits: 5,
      stage: "stage1_y1",
      stageLabel: "Năm 1 (HK 1–2)",
      track: "common",
      category: "ctrl_it",
      summary: "Làm quen tư duy thuật toán, cấu trúc dữ liệu và ngôn ngữ C/C++ — ngôn ngữ số 1 thế giới để lập trình vi điều khiển và hệ thống cơ điện tử.",
      handsOn: "Tự viết chương trình điều khiển logic, xử lý mảng dữ liệu cảm biến và giải bài toán tự động.",
      highSchoolLink: "Nếu chưa học sâu Tin học ở cấp 3 vẫn theo kịp nhờ lộ trình đi từ cơ bản."
    },
    {
      id: "c05",
      code: "ME-105",
      name: "Đồ họa Kỹ thuật & Thiết kế CAD 3D",
      credits: 3,
      stage: "stage1_y1",
      stageLabel: "Năm 1 (HK 2)",
      track: "common",
      category: "mech",
      summary: "Học ngôn ngữ bản vẽ của kỹ sư: đọc hiểu bản vẽ chi tiết cơ khí quốc tế và dựng mô hình 3D sống động trên máy tính.",
      handsOn: "Dựng mô hình 3D cụm bánh răng, khung vỏ robot bằng phần mềm SolidWorks / AutoCAD.",
      highSchoolLink: "Ứng dụng tư duy Hình học không gian và môn Công nghệ vẽ kỹ thuật."
    },
    {
      id: "c06",
      code: "ME-106",
      name: "Nhập môn Kỹ thuật Cơ điện tử",
      credits: 2,
      stage: "stage1_y1",
      stageLabel: "Năm 1 (HK 1)",
      track: "common",
      category: "project",
      summary: "Môn học truyền cảm hứng đầu khóa giúp tân sinh viên thấy bức tranh toàn cảnh ngành Cơ điện tử và trải nghiệm làm việc nhóm chế tạo sản phẩm mini.",
      handsOn: "Lắp ráp và chạy thử mô hình xe dò line / cơ cấu tự động đầu tiên cùng nhóm bạn ngay năm nhất!",
      highSchoolLink: "Rất gần gũi với các hoạt động STEM tại trường phổ thông."
    },
    {
      id: "c07",
      code: "ME-201",
      name: "Cơ học Kỹ thuật & Sức bền Vật liệu",
      credits: 6,
      stage: "stage1_y2",
      stageLabel: "Năm 2 (HK 3–4)",
      track: "common",
      category: "mech",
      summary: "Tính toán lực, vận tốc, gia tốc và kiểm tra độ bền uốn, xoắn để cánh tay robot nâng vật nặng mà không bị gãy hay biến dạng.",
      handsOn: "Phân tích lực tác dụng lên khớp gắp robot và thí nghiệm kéo/nén vật liệu kim loại.",
      highSchoolLink: "Phát triển từ phần Tĩnh học vật rắn & Động lực học Vật lý THPT."
    },
    {
      id: "c08",
      code: "ME-202",
      name: "Nguyên lý máy & Chi tiết máy",
      credits: 5,
      stage: "stage1_y2",
      stageLabel: "Năm 2 (HK 4)",
      track: "common",
      category: "mech",
      summary: "Khám phá bí mật đằng sau cơ cấu cam, bánh răng, bộ truyền đai, trục vít-đai ốc bi giúp biến chuyển động quay của động cơ thành thao tác khéo léo.",
      handsOn: "Thiết kế hộp giảm tốc cho khớp xoay của robot công nghiệp.",
      highSchoolLink: "Kết hợp Hình học phẳng, Vật lý chuyển động tròn đều."
    },
    {
      id: "c09",
      code: "EE-203",
      name: "Kỹ thuật Điện & Kỹ thuật Điện tử (Tương tự - Số)",
      credits: 6,
      stage: "stage1_y2",
      stageLabel: "Năm 2 (HK 3–4)",
      track: "common",
      category: "elec",
      summary: "Hiểu rõ mạch điện một chiều/xoay chiều, transistor, op-amp, cổng logic số để thiết kế mạch nguồn và mạch giao tiếp phần cứng.",
      handsOn: "Hàn mạch, đo sóng điện bằng máy hiện sóng (Oscilloscope) và lắp mạch logic số trên breadboard.",
      highSchoolLink: "Mở rộng thực tế từ chương Dòng điện không đổi & Điện xoay chiều lớp 11–12."
    },
    {
      id: "c10",
      code: "JP-201",
      name: "Tiếng Nhật Trung cấp (Tiếng Nhật 4 – 6)",
      credits: 12,
      stage: "stage1_y2",
      stageLabel: "Năm 2 (HK 3–4)",
      track: "common",
      category: "japanese",
      summary: "Tăng tốc lên trình độ N3 – tiệm cận N2: luyện nghe hiểu tốc độ tự nhiên, đọc văn bản dài, viết luận ngắn và phản xạ giao tiếp học thuật.",
      handsOn: "Luyện đề JLPT/EJU thực chiến và giao lưu học thuật cùng giảng viên người Nhật.",
      highSchoolLink: "Tiếp nối trực tiếp chuỗi Tiếng Nhật năm 1."
    },
    {
      id: "c11",
      code: "CTRL-204",
      name: "Lý thuyết Điều khiển Tự động",
      credits: 3,
      stage: "stage1_y25",
      stageLabel: "Năm 2,5 (HK 5)",
      track: "common",
      category: "ctrl_it",
      summary: "Trái tim của tự động hóa: học bộ điều khiển PID và phản hồi kín giúp drone tự cân bằng trước gió hoặc động cơ giữ đúng tốc độ mong muốn.",
      handsOn: "Mô phỏng hệ thống điều khiển cân bằng tự động bằng MATLAB / Simulink.",
      highSchoolLink: "Ứng dụng đạo hàm, tích phân để điều chỉnh sai số hệ thống theo thời gian thực."
    },
    {
      id: "c12",
      code: "EE-205",
      name: "Vi điều khiển & Kỹ thuật Cảm biến",
      credits: 6,
      stage: "stage1_y25",
      stageLabel: "Năm 2,5 (HK 5)",
      track: "common",
      category: "elec",
      summary: "Lập trình chip vi điều khiển (ARM/STM32/MCU) đọc dữ liệu từ encoder, cảm biến khoảng cách, gia tốc kế và điều khiển động cơ chính xác.",
      handsOn: "Lập trình bo mạch vi điều khiển điều khiển động cơ DC Servo/Stepper hiển thị thông số thời gian thực.",
      highSchoolLink: "Kết hợp kỹ năng lập trình C/C++ và kiến thức mạch điện tử."
    },
    {
      id: "c13",
      code: "JP-205",
      name: "Tiếng Nhật Chuyên ngành Kỹ thuật & Chuẩn bị Chuyển tiếp",
      credits: 6,
      stage: "stage1_y25",
      stageLabel: "Năm 2,5 (HK 5)",
      track: "common",
      category: "japanese",
      summary: "Làm chủ từ vựng Toán - Lý - Cơ điện tử bằng tiếng Nhật (Kanji kỹ thuật), luyện trả lời phỏng vấn Giáo sư Nhật hoặc giao tiếp trong công ty Nhật.",
      handsOn: "Diễn tập phỏng vấn học thuật bằng tiếng Nhật và đọc tài liệu kỹ thuật song ngữ.",
      highSchoolLink: "Bước đệm hoàn hảo trước thời điểm phân nhánh cuối Học kỳ 5."
    },

    // ================= NHÁNH 1: CHUYỂN TIẾP NHẬT BẢN (TẠI NUT / ĐỐI TÁC NHẬT) =================
    {
      id: "t01",
      code: "NUT-301",
      name: "Kỹ thuật Cơ điện tử Nâng cao (メカトロニクス工学)",
      credits: 4,
      stage: "stage2_transfer",
      stageLabel: "Năm 3–4 (Tại Nhật Bản)",
      track: "transfer",
      category: "mech",
      summary: "Học trực tiếp tại giảng đường Nhật Bản về tích hợp cơ cấu cơ khí siêu chính xác với truyền động servo tốc độ cao theo chuẩn công nghiệp Nhật.",
      handsOn: "Phân tích và tối ưu hóa mô hình máy CNC / bàn dịch chuyển chính xác cỡ micromet tại Nhật.",
      highSchoolLink: "Giảng dạy bằng Tiếng Nhật sau khi hoàn thành 2,5 năm đầu tại Việt Nam."
    },
    {
      id: "t02",
      code: "NUT-302",
      name: "Robot học & Điều khiển Chuyển động (ロボット工学)",
      credits: 4,
      stage: "stage2_transfer",
      stageLabel: "Năm 3–4 (Tại Nhật Bản)",
      track: "transfer",
      category: "ctrl_it",
      summary: "Nghiên cứu động học thuận/nghịch, lập quỹ đạo chuyển động thông minh cho robot đa bậc tự do, robot cộng tác và robot di động tự hành.",
      handsOn: "Thực hành lập trình ROS (Robot Operating System) trên các nền tảng robot nghiên cứu tại trường Nhật.",
      highSchoolLink: "Ứng dụng mạnh Đại số ma trận, Lượng giác và Lập trình C++/Python."
    },
    {
      id: "t03",
      code: "NUT-303",
      name: "Đo lường Chính xác & Xử lý Tín hiệu Số",
      credits: 4,
      stage: "stage2_transfer",
      stageLabel: "Năm 3–4 (Tại Nhật Bản)",
      track: "transfer",
      category: "elec",
      summary: "Khử nhiễu tín hiệu cảm biến, đo lường quang học/laser và xử lý dữ liệu tốc độ cao trong các thiết bị y sinh, bán dẫn và tự động hóa của Nhật.",
      handsOn: "Thiết kế bộ lọc số thu nhận tín hiệu rung động và lực kẹp trên tay gắp tinh vi.",
      highSchoolLink: "Phát triển sâu từ Sóng cơ, Sóng ánh sáng và Toán biến đổi Fourier."
    },
    {
      id: "t04",
      code: "NUT-304",
      name: "Cơ học Vật liệu Tiên tiến & Chế tạo Vi cơ điện tử (MEMS)",
      credits: 4,
      stage: "stage2_transfer",
      stageLabel: "Năm 3–4 (Tại Nhật Bản)",
      track: "transfer",
      category: "mech",
      summary: "Tìm hiểu công nghệ gia công siêu tinh xảo, vật liệu compozit nhẹ bền và cảm biến vi cơ điện tử nằm trong điện thoại, ô tô điện hiện đại.",
      handsOn: "Tham quan và thực hành trên hệ thống thiết bị chế tạo & kiểm định hiện đại tại Đại học Nhật Bản.",
      highSchoolLink: "Mở rộng kiến thức Vật lý chất rắn và Công nghệ vật liệu mới."
    },
    {
      id: "t05",
      code: "NUT-305",
      name: "AI Ứng dụng, Thị giác Máy & Hệ thống Thông minh",
      credits: 4,
      stage: "stage2_transfer",
      stageLabel: "Năm 3–4 (Tại Nhật Bản)",
      track: "transfer",
      category: "ctrl_it",
      summary: "Trang bị 'đôi mắt AI' cho robot bằng học sâu (Deep Learning) và xử lý ảnh để tự động nhận diện vật thể, phát hiện lỗi sản phẩm tức thì.",
      handsOn: "Huấn luyện mô hình AI nhận diện chi tiết cơ khí để cánh tay robot tự phân loại.",
      highSchoolLink: "Kết hợp xác suất thống kê, ma trận và tư duy lập trình hiện đại."
    },
    {
      id: "t06",
      code: "NUT-401",
      name: "Nghiên cứu Phòng thí nghiệm Nhật Bản (研究室ゼミ - Kenkyushitsu)",
      credits: 8,
      stage: "stage2_transfer",
      stageLabel: "Năm 3–4 (Tại Nhật Bản)",
      track: "transfer",
      category: "project",
      summary: "Đặc sản giáo dục đại học Nhật: mỗi sinh viên trở thành thành viên chính thức một Lab nghiên cứu, có bàn làm việc riêng và được Giáo sư hướng dẫn sát sao.",
      handsOn: "Báo cáo seminar hằng tuần bằng tiếng Nhật và trực tiếp chế tạo nguyên mẫu công nghệ mới trong Lab.",
      highSchoolLink: "Rèn luyện tác phong nghiên cứu độc lập và tư duy giải quyết vấn đề chuẩn quốc tế."
    },
    {
      id: "t07",
      code: "NUT-402",
      name: "Thực tập Kỹ sư Dài hạn tại Doanh nghiệp Nhật (実務訓練 - Jitsumu Kunren)",
      credits: 8,
      stage: "stage2_transfer",
      stageLabel: "Năm 4 (Tại Nhật Bản)",
      track: "transfer",
      category: "project",
      summary: "Chương trình nổi tiếng của ĐH Công nghệ Nagaoka: sinh viên đi thực tập R&D toàn thời gian (tới ~5 tháng) ngay tại các tập đoàn công nghệ ở Nhật Bản.",
      handsOn: "Giải quyết bài toán kỹ thuật thực tế tại công ty Nhật, trải nghiệm môi trường làm việc chuyên nghiệp và mở rộng cơ hội được tuyển thẳng.",
      highSchoolLink: "Bước chuyển mình thực tế từ sinh viên thành kỹ sư toàn cầu."
    },
    {
      id: "t08",
      code: "NUT-499",
      name: "Nghiên cứu & Khóa luận Tốt nghiệp Đại học Nhật Bản (卒業研究)",
      credits: 8,
      stage: "stage2_transfer",
      stageLabel: "Năm cuối (Tại Nhật Bản)",
      track: "transfer",
      category: "project",
      summary: "Hoàn thành công trình nghiên cứu cá nhân và bảo vệ khóa luận bằng tiếng Nhật trước hội đồng Giáo sư để nhận bằng Cử nhân Kỹ thuật của trường Nhật.",
      handsOn: "Hoàn thiện thiết bị/thuật toán thực nghiệm và trình bày báo cáo khoa học tại Nhật.",
      highSchoolLink: "Đích đến tự hào khép lại hành trình chuyển tiếp quốc tế."
    },

    // ================= NHÁNH 2: KHÔNG CHUYỂN TIẾP (HỌC TIẾP TẠI VIỆT NAM) =================
    {
      id: "v01",
      code: "VN-301",
      name: "Truyền động Cơ điện tử (Điện - Thủy lực - Khí nén)",
      credits: 4,
      stage: "stage2_vn",
      stageLabel: "Năm 3–4 (Tại Việt Nam)",
      track: "non_transfer",
      category: "elec",
      summary: "Làm chủ các hệ cơ bắp mạnh mẽ của dây chuyền công nghiệp: động cơ AC Servo, biến tần, xi-lanh khí nén và hệ thống thủy lực công suất lớn.",
      handsOn: "Đấu nối và điều khiển trạm khí nén tự động kết hợp động cơ servo trên bàn thực hành công nghiệp.",
      highSchoolLink: "Ứng dụng kiến thức Áp suất chất khí/chất lỏng và Điện ba pha."
    },
    {
      id: "v02",
      code: "VN-302",
      name: "Robot Công nghiệp & Robot Tự hành (AGV/AMR)",
      credits: 4,
      stage: "stage2_vn",
      stageLabel: "Năm 3–4 (Tại Việt Nam)",
      track: "non_transfer",
      category: "ctrl_it",
      summary: "Thiết kế, tính toán động học và lập trình vận hành cánh tay robot công nghiệp 6 bậc tự do cùng xe tự hành vận chuyển hàng trong nhà máy thông minh.",
      handsOn: "Lập trình tay máy robot công nghiệp thực hiện gắp - lắp ráp tự động và điều hướng robot di động.",
      highSchoolLink: "Biến ước mơ chế tạo robot thời học sinh thành kỹ năng chuyên nghiệp."
    },
    {
      id: "v03",
      code: "VN-303",
      name: "Điều khiển Logic Khả trình (PLC) & Mạng Công nghiệp IoT",
      credits: 4,
      stage: "stage2_vn",
      stageLabel: "Năm 3–4 (Tại Việt Nam)",
      track: "non_transfer",
      category: "ctrl_it",
      summary: "Học công nghệ cốt lõi đang vận hành 90% nhà máy sản xuất hiện đại tại Việt Nam: lập trình PLC, màn hình giám sát HMI/SCADA và kết nối dữ liệu IoT.",
      handsOn: "Xây dựng mô hình dây chuyền phân loại - đóng gói sản phẩm tự động điều khiển qua PLC & giao diện giám sát.",
      highSchoolLink: "Rèn tư duy logic chặt chẽ, cực kỳ sát nhu cầu tuyển dụng của các tập đoàn sản xuất."
    },
    {
      id: "v04",
      code: "VN-304",
      name: "Công nghệ CNC & Chế tạo Số (CAD/CAM/CAE)",
      credits: 4,
      stage: "stage2_vn",
      stageLabel: "Năm 3–4 (Tại Việt Nam)",
      track: "non_transfer",
      category: "mech",
      summary: "Từ bản vẽ 3D trên máy tính xuất thẳng mã lệnh gia công tự động trên máy phay/tiện CNC và kiểm nghiệm độ bền bằng phần tử hữu hạn (CAE).",
      handsOn: "Thiết kế chi tiết cơ khí, mô phỏng chịu tải và gia công ra sản phẩm kim loại thực tế tại xưởng.",
      highSchoolLink: "Sự giao thoa giữa Thiết kế kỹ thuật, Hình học tọa độ và Tin học."
    },
    {
      id: "v05",
      code: "VN-305",
      name: "Thị giác Máy & Trí tuệ Nhân tạo trong Cơ điện tử",
      credits: 3,
      stage: "stage2_vn",
      stageLabel: "Năm 3–4 (Tại Việt Nam)",
      track: "non_transfer",
      category: "ctrl_it",
      summary: "Sử dụng camera công nghiệp và thuật toán xử lý ảnh/AI để kiểm tra chất lượng linh kiện điện tử, đọc mã vạch và dẫn đường cho tay gắp robot.",
      handsOn: "Viết phần mềm OpenCV / AI phát hiện sản phẩm lỗi trên băng chuyền theo thời gian thực.",
      highSchoolLink: "Kết hợp lập trình Python/C++ với Quang hình học và Toán ma trận."
    },
    {
      id: "v06",
      code: "VN-306",
      name: "Tiếng Nhật Giao tiếp Doanh nghiệp Kỹ thuật",
      credits: 4,
      stage: "stage2_vn",
      stageLabel: "Năm 3–4 (Tại Việt Nam)",
      track: "non_transfer",
      category: "japanese",
      summary: "Duy trì và nâng cao lợi thế tiếng Nhật ngay cả khi học tại Việt Nam: viết email kỹ thuật, báo cáo dự án (Hou-Ren-So) và đọc bản vẽ/spec tiếng Nhật.",
      handsOn: "Thực hành thảo luận dự án kỹ thuật và viết CV/phỏng vấn xin việc bằng tiếng Nhật.",
      highSchoolLink: "Giúp sinh viên học tại VN vẫn nắm lợi thế lương thưởng vượt trội tại doanh nghiệp Nhật/FDI."
    },
    {
      id: "v07",
      code: "VN-401",
      name: "Đồ án Thiết kế Hệ thống Cơ điện tử Tích hợp",
      credits: 4,
      stage: "stage2_vn",
      stageLabel: "Năm 4 (Tại Việt Nam)",
      track: "non_transfer",
      category: "project",
      summary: "Học phần 'tổng duyệt' liên ngành: nhóm sinh viên tự thiết kế từ A–Z cả phần khung cơ khí, mạch điện tử lẫn thuật toán điều khiển cho một cỗ máy hoàn chỉnh.",
      handsOn: "Chế tạo sản phẩm thật chạy được (ví dụ: máy phân loại thông minh, robot leo cầu thang, kho tự động mini).",
      highSchoolLink: "Tổng hợp toàn bộ kiến thức Cơ - Điện - Tin đã tích lũy."
    },
    {
      id: "v08",
      code: "VN-499",
      name: "Thực tập Doanh nghiệp & Đồ án Tốt nghiệp Cử nhân / Kỹ sư",
      credits: 12,
      stage: "stage2_vn",
      stageLabel: "Năm cuối (Tại Việt Nam)",
      track: "non_transfer",
      category: "project",
      summary: "Thực tập thực tế tại các tập đoàn sản xuất, R&D lớn ở Việt Nam và thực hiện Đồ án tốt nghiệp giải quyết bài toán tự động hóa / robot chuyên sâu.",
      handsOn: "Bảo vệ đồ án tốt nghiệp kèm mô hình thực nghiệm để nhận bằng chính quy trong nước.",
      highSchoolLink: "Sẵn sàng đi làm ngay hoặc học tiếp lên bậc Kỹ sư chuyên sâu / Thạc sĩ."
    }
  ],

  careers: [
    {
      role: "Kỹ sư Thiết kế Robot & Tự động hóa",
      desc: "Thiết kế dây chuyền lắp ráp tự động, lập trình robot công nghiệp, xe tự hành AGV tại các nhà máy thông minh ở Nhật Bản và Việt Nam.",
      badge: "Nhu cầu rất cao"
    },
    {
      role: "Kỹ sư R&D Hệ thống Nhúng & Thiết bị Thông minh",
      desc: "Phát triển bo mạch điều khiển, thiết bị IoT, máy móc y sinh, linh kiện ô tô điện và thiết bị bán dẫn tại các trung tâm Nghiên cứu & Phát triển.",
      badge: "Sáng tạo công nghệ"
    },
    {
      role: "Kỹ sư Cầu nối Cơ điện tử Việt – Nhật (BrSE / Kỹ sư dự án)",
      desc: "Nhờ giỏi cả chuyên môn Cơ điện tử lẫn Tiếng Nhật, bạn trở thành nhân sự chủ chốt kết nối đội ngũ kỹ thuật giữa trụ sở Nhật Bản và nhà máy tại Việt Nam.",
      badge: "Lợi thế độc quyền ME-NUT"
    },
    {
      role: "Nghiên cứu viên / Học tiếp Thạc sĩ – Tiến sĩ Quốc tế",
      desc: "Tiếp tục học lên bậc Sau đại học với nhiều học bổng giá trị tại Nhật Bản hoặc các quốc gia phát triển mạnh về Robotics.",
      badge: "Học thuật chuyên sâu"
    }
  ],

  faqs: [
    {
      q: "Em chưa biết một chữ tiếng Nhật nào ở cấp 3 thì vào ngành ME-NUT có theo kịp không?",
      a: "Hoàn toàn theo kịp! Chương trình thiết kế mặc định cho học sinh THPT bắt đầu từ con số 0. Ngay từ Học kỳ 1 năm nhất, bạn sẽ được học bài bản từ bảng chữ cái cùng lộ trình tăng cường liên tục qua từng kỳ để đạt chuẩn trước khi xét chuyển tiếp."
    },
    {
      q: "Nếu sau 2,5 năm đầu em đổi ý hoặc điều kiện gia đình chưa phù hợp để đi Nhật thì sao?",
      a: "Đó chính là ưu điểm linh hoạt nhất của ME-NUT! Bạn không hề bị gián đoạn việc học mà sẽ chuyển sang Nhánh Không chuyển tiếp để học tiếp các môn chuyên ngành ngay trong nước, nhận bằng tốt nghiệp chính quy và vẫn sở hữu vốn tiếng Nhật cực kỳ giá trị khi đi xin việc."
    },
    {
      q: "Sự khác nhau lớn nhất giữa môn học khi Chuyển tiếp và Không chuyển tiếp là gì?",
      a: "Trong 2,5 năm đầu, cả hai lộ trình học chung nền tảng Toán - Lý, Cơ sở Cơ điện tử và Tiếng Nhật. Từ năm thứ 3 trở đi: nhánh Chuyển tiếp học chuyên sâu bằng tiếng Nhật tại ĐH đối tác ở Nhật, gắn chặt với nghiên cứu Lab (Kenkyushitsu) và thực tập 5 tháng tại công ty Nhật; trong khi nhánh Không chuyển tiếp đi sâu vào thiết kế hệ thống cơ điện tử, PLC, Robot công nghiệp, CAD/CAM/CNC và thực tập tại các tập đoàn lớn ở Việt Nam."
    },
    {
      q: "Con gái hoặc học sinh chưa từng thi lắp ráp Robot ở cấp 3 có học được ME-NUT không?",
      a: "Hoàn toàn được! Cơ điện tử ngày nay không phải công việc bê vác nặng nhọc mà tập trung vào thiết kế trên máy tính (CAD 3D), mạch vi điều khiển, lập trình AI/Thị giác máy và quản lý hệ thống tự động — rất nhiều bạn nữ hoặc bạn mới tiếp cận lần đầu ở năm nhất đều học xuất sắc."
    },
    {
      q: "Để chuẩn bị tốt nhất từ bây giờ (lớp 10, 11, 12), em nên tập trung vào môn gì?",
      a: "Hãy ưu tiên nắm chắc Toán (đặc biệt là hàm số, vectơ, tọa độ không gian, tích phân) và Vật lý (cơ học, dòng điện, từ trường), đồng thời ôn tốt tổ hợp xét tuyển hoặc kỳ thi Đánh giá tư duy. Nếu rảnh rỗi, bạn có thể xem thử các video về Arduino/Robotics để tăng thêm cảm hứng!"
    }
  ]
};
