/**
 * ME-NUT Explorer — Interactive UI Controller
 */
(function () {
  "use strict";

  const data = window.MENUT_DATA;
  if (!data) return;

  const state = {
    pathwayMode: "transfer", // 'transfer' | 'non_transfer' | 'compare'
    category: "all",
    search: "",
    checkedFitIndices: new Set()
  };

  /* -------------------- Utilities -------------------- */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeVi(str) {
    return String(str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .trim();
  }

  function getPillarSvg(id) {
    switch (id) {
      case "mech":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>`;
      case "elec":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>`;
      case "code":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>`;
      default:
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>`;
    }
  }

  function getCategoryLabel(catId) {
    const found = data.categories.find((c) => c.id === catId);
    return found ? found.label : catId;
  }

  function getTrackBadgeInfo(track) {
    if (track === "transfer") {
      return {
        label: "Nhánh Chuyển tiếp Nhật",
        cls: "course-track-tag--transfer"
      };
    }
    if (track === "non_transfer") {
      return {
        label: "Nhánh Không chuyển tiếp (VN)",
        cls: "course-track-tag--non_transfer"
      };
    }
    return {
      label: "Nền tảng chung (Cả 2 nhánh)",
      cls: "course-track-tag--common"
    };
  }

  /* -------------------- Render Static-Data Sections -------------------- */
  function renderQuickStats() {
    const el = document.getElementById("quickStatsGrid");
    if (!el) return;
    el.innerHTML = data.quickStats
      .map(
        (item) => `
      <div class="stat-card">
        <div class="stat-card__top">
          <span class="stat-card__value">${escapeHtml(item.value)}</span>
          <span class="stat-card__unit">${escapeHtml(item.unit)}</span>
        </div>
        <p class="stat-card__label">${escapeHtml(item.label)}</p>
      </div>`
      )
      .join("");
  }

  function renderPillars() {
    const el = document.getElementById("pillarsGrid");
    if (!el) return;
    el.innerHTML = data.pillars
      .map(
        (p) => `
      <article class="pillar-card pillar-card--${escapeHtml(p.color)}">
        <div class="pillar-card__icon">${getPillarSvg(p.id)}</div>
        <div class="pillar-card__sub">${escapeHtml(p.subtitle)}</div>
        <h3 class="pillar-card__title">${escapeHtml(p.title)}</h3>
        <p class="pillar-card__desc">${escapeHtml(p.desc)}</p>
      </article>`
      )
      .join("");
  }

  function renderRequirements() {
    const el = document.getElementById("requirementsColumns");
    if (!el) return;

    const panels = [
      { key: "admission", mod: "req-panel--admission", eyebrowCls: "" },
      { key: "transfer", mod: "req-panel--transfer", eyebrowCls: "eyebrow--coral" }
    ];

    el.innerHTML = panels
      .map(({ key, mod, eyebrowCls }) => {
        const block = data.requirements[key];
        const itemsHtml = block.items
          .map(
            (item, idx) => `
          <div class="req-item">
            <div class="req-item__num">0${idx + 1}</div>
            <div>
              <div class="req-item__head">
                <h4 class="req-item__title">${escapeHtml(item.title)}</h4>
                <span class="req-item__tag">${escapeHtml(item.tag)}</span>
              </div>
              <p class="req-item__detail">${escapeHtml(item.detail)}</p>
            </div>
          </div>`
          )
          .join("");

        return `
        <article class="req-panel ${mod}">
          <span class="eyebrow ${eyebrowCls}">${escapeHtml(block.badge)}</span>
          <h3 class="req-panel__title">${escapeHtml(block.title)}</h3>
          <p class="req-panel__subtitle">${escapeHtml(block.subtitle)}</p>
          <div class="req-list">${itemsHtml}</div>
        </article>`;
      })
      .join("");
  }

  function renderFitChecklist() {
    const grid = document.getElementById("fitChecklistGrid");
    if (!grid) return;

    grid.innerHTML = data.fitChecklist
      .map(
        (text, idx) => `
      <label class="fit-option" data-fit-idx="${idx}">
        <input type="checkbox" value="${idx}" />
        <span class="fit-check-ui" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="opacity:0">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span class="fit-option__text">${escapeHtml(text)}</span>
      </label>`
      )
      .join("");

    grid.addEventListener("change", (e) => {
      const input = e.target.closest("input[type='checkbox']");
      if (!input) return;
      const idx = Number(input.value);
      const label = input.closest(".fit-option");
      const svg = label.querySelector("svg");

      if (input.checked) {
        state.checkedFitIndices.add(idx);
        label.classList.add("is-checked");
        if (svg) svg.style.opacity = "1";
      } else {
        state.checkedFitIndices.delete(idx);
        label.classList.remove("is-checked");
        if (svg) svg.style.opacity = "0";
      }
      updateFitFeedback();
    });
  }

  function updateFitFeedback() {
    const total = data.fitChecklist.length;
    const count = state.checkedFitIndices.size;
    const scoreBadge = document.getElementById("fitScoreBadge");
    const msgEl = document.getElementById("fitResultMessage");

    if (scoreBadge) {
      scoreBadge.textContent = `Đã chọn: ${count} / ${total}`;
    }
    if (!msgEl) return;

    let message = "";
    if (count === 0) {
      message = "Hãy bấm chọn các ô phía trên để nhận gợi ý dành riêng cho bạn.";
    } else if (count <= 2) {
      message =
        "Bạn đã có những nét đồng điệu bước đầu! Hãy thử lướt xuống xem các môn thực hành của ngành để cảm nhận rõ hơn liệu Cơ điện tử có khiến bạn tò mò không nhé.";
    } else if (count <= 4) {
      message =
        "Rất tiềm năng! Tư duy và định hướng của bạn khá khớp với chất kỹ sư ME-NUT. Lộ trình 2,5 năm đầu sẽ giúp bạn xây chắc cả lập trình, phần cứng lẫn Tiếng Nhật.";
    } else {
      message =
        "Mảnh ghép hoàn hảo! ME-NUT sinh ra dành cho những bạn trẻ giống như bạn — vừa mê tạo ra sản phẩm công nghệ thật, vừa muốn rộng mở cánh cửa Việt – Nhật.";
    }

    msgEl.innerHTML = `
      <span>${escapeHtml(message)}</span>
      ${
        count >= 2
          ? `<a href="#mon-hoc" class="btn btn--primary" style="padding: 9px 18px; font-size: 0.875rem;">Khám phá môn học ngay →</a>`
          : ""
      }
    `;
  }

  function renderPathwayComparison() {
    const tbody = document.getElementById("pathwayComparisonBody");
    if (!tbody) return;

    tbody.innerHTML = data.pathwayComparison
      .map(
        (row) => `
      <tr>
        <td>${escapeHtml(row.criteria)}</td>
        <td>${escapeHtml(row.transfer)}</td>
        <td>${escapeHtml(row.nonTransfer)}</td>
      </tr>`
      )
      .join("");
  }

  /* -------------------- Interactive Course Explorer -------------------- */
  function renderCategoryPills() {
    const container = document.getElementById("categoryPills");
    if (!container) return;

    container.innerHTML = data.categories
      .map(
        (cat) => `
      <button
        type="button"
        class="cat-pill ${state.category === cat.id ? "is-active" : ""}"
        data-cat="${escapeHtml(cat.id)}"
      >
        ${escapeHtml(cat.label)}
      </button>`
      )
      .join("");
  }

  function filterCourseList(list) {
    const query = normalizeVi(state.search);
    return list.filter((course) => {
      if (state.category !== "all" && course.category !== state.category) {
        return false;
      }
      if (!query) return true;
      const haystack = normalizeVi(
        `${course.code} ${course.name} ${course.summary} ${course.handsOn} ${course.stageLabel}`
      );
      return haystack.includes(query);
    });
  }

  function renderCourseCard(course) {
    const badge = getTrackBadgeInfo(course.track);
    const catLabel = getCategoryLabel(course.category);
    return `
      <button
        type="button"
        class="course-card course-card--${escapeHtml(course.track)}"
        data-course-id="${escapeHtml(course.id)}"
        aria-label="Xem chi tiết môn ${escapeHtml(course.name)}"
      >
        <div class="course-card__top">
          <span class="course-track-tag ${badge.cls}">${escapeHtml(badge.label)}</span>
          <span class="course-credits">${course.credits} tín chỉ</span>
        </div>
        <h4 class="course-card__name">${escapeHtml(course.name)}</h4>
        <div class="course-card__stage">${escapeHtml(course.stageLabel)} · ${escapeHtml(catLabel)}</div>
        <p class="course-card__summary">${escapeHtml(course.summary)}</p>
        <div class="course-card__footer">
          <span>Xem thực hành &amp; liên hệ cấp 3</span>
          <span aria-hidden="true">→</span>
        </div>
      </button>`;
  }

  function renderCourses() {
    const container = document.getElementById("courseGroupsContainer");
    const summaryEl = document.getElementById("explorerSummary");
    if (!container || !summaryEl) return;

    const groupsConfig = [];
    groupsConfig.push({
      key: "common",
      title: "Giai đoạn 1 (2,5 năm đầu): Học phần Nền tảng & Tiếng Nhật chung",
      badgeText: "Bắt buộc cho cả 2 lộ trình",
      badgeClass: "group-badge--common",
      courses: filterCourseList(data.courses.filter((c) => c.track === "common"))
    });

    if (state.pathwayMode === "transfer" || state.pathwayMode === "compare") {
      groupsConfig.push({
        key: "transfer",
        title: "Giai đoạn 2 (Tại Nhật Bản): Học phần Chuyên sâu & Nghiên cứu Lab",
        badgeText: "Khi chọn Chuyển tiếp sang Nhật",
        badgeClass: "group-badge--transfer",
        courses: filterCourseList(data.courses.filter((c) => c.track === "transfer"))
      });
    }

    if (state.pathwayMode === "non_transfer" || state.pathwayMode === "compare") {
      groupsConfig.push({
        key: "non_transfer",
        title: "Giai đoạn 2 (Tại Việt Nam): Học phần Chuyên ngành & Đồ án Thực chiến",
        badgeText: "Khi chọn Không chuyển tiếp",
        badgeClass: "group-badge--vn",
        courses: filterCourseList(data.courses.filter((c) => c.track === "non_transfer"))
      });
    }

    const visibleGroups = groupsConfig.filter((g) => g.courses.length > 0);
    const totalCourses = visibleGroups.reduce((acc, g) => acc + g.courses.length, 0);
    const totalCredits = visibleGroups.reduce(
      (acc, g) => acc + g.courses.reduce((s, c) => s + c.credits, 0),
      0
    );

    const hasActiveFilter = state.category !== "all" || state.search.trim() !== "";
    summaryEl.innerHTML = `
      <span>Đang hiển thị <strong>${totalCourses} nhóm môn</strong> (${totalCredits} tín chỉ tiêu biểu)</span>
      ${
        hasActiveFilter
          ? `<button type="button" id="resetFiltersBtn" class="cat-pill" style="padding: 5px 12px; font-size: 0.8rem;">Xóa bộ lọc</button>`
          : ""
      }
    `;

    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.category = "all";
        state.search = "";
        const searchInput = document.getElementById("courseSearchInput");
        if (searchInput) searchInput.value = "";
        renderCategoryPills();
        renderCourses();
      });
    }

    if (visibleGroups.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <p style="font-weight: 700; font-size: 1.05rem;">Không tìm thấy môn học khớp với từ khóa "${escapeHtml(state.search)}".</p>
          <p style="margin-top: 6px; font-size: 0.9rem;">Hãy thử tìm bằng từ khóa ngắn hơn như <strong>Robot</strong>, <strong>Tiếng Nhật</strong>, <strong>AI</strong>, <strong>Cảm biến</strong> hoặc bấm Xóa bộ lọc.</p>
        </div>`;
      return;
    }

    container.innerHTML = visibleGroups
      .map(
        (group) => `
      <div class="course-group">
        <div class="course-group__header">
          <h3 class="course-group__title">${escapeHtml(group.title)}</h3>
          <span class="group-badge ${group.badgeClass}">${escapeHtml(group.badgeText)} · ${group.courses.length} học phần</span>
        </div>
        <div class="course-grid">
          ${group.courses.map(renderCourseCard).join("")}
        </div>
      </div>`
      )
      .join("");
  }

  function setPathwayMode(mode) {
    state.pathwayMode = mode;
    document.querySelectorAll(".pathway-tab").forEach((btn) => {
      const active = btn.getAttribute("data-mode") === mode;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    renderCourses();
  }

  /* -------------------- Course Modal -------------------- */
  let lastFocusedCard = null;

  function openCourseModal(courseId, triggerEl) {
    const course = data.courses.find((c) => c.id === courseId);
    if (!course) return;

    lastFocusedCard = triggerEl || null;
    const backdrop = document.getElementById("courseModalBackdrop");
    const badgeWrap = document.getElementById("modalTrackBadge");
    const titleEl = document.getElementById("modalCourseTitle");
    const metaEl = document.getElementById("modalCourseMeta");
    const summaryEl = document.getElementById("modalCourseSummary");
    const handsOnEl = document.getElementById("modalCourseHandsOn");
    const hsEl = document.getElementById("modalCourseHighSchool");

    const badge = getTrackBadgeInfo(course.track);
    badgeWrap.innerHTML = `<span class="course-track-tag ${badge.cls}">${escapeHtml(badge.label)}</span>`;
    titleEl.textContent = course.name;
    metaEl.innerHTML = `
      <span>Mã tham khảo: <strong>${escapeHtml(course.code)}</strong></span>
      <span>•</span>
      <span>Thời điểm: <strong>${escapeHtml(course.stageLabel)}</strong></span>
      <span>•</span>
      <span>Khối lượng: <strong>${course.credits} tín chỉ</strong></span>
    `;
    summaryEl.textContent = course.summary;
    handsOnEl.textContent = course.handsOn;
    hsEl.textContent = course.highSchoolLink;

    backdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
    const closeBtn = document.getElementById("modalCloseBtn");
    if (closeBtn) closeBtn.focus();
  }

  function closeCourseModal() {
    const backdrop = document.getElementById("courseModalBackdrop");
    if (!backdrop || !backdrop.classList.contains("is-open")) return;
    backdrop.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocusedCard) {
      lastFocusedCard.focus();
      lastFocusedCard = null;
    }
  }

  /* -------------------- Careers & FAQ -------------------- */
  function renderCareers() {
    const el = document.getElementById("careersGrid");
    if (!el) return;
    el.innerHTML = data.careers
      .map(
        (c) => `
      <article class="career-card">
        <span class="career-card__badge">${escapeHtml(c.badge)}</span>
        <h3 class="career-card__title">${escapeHtml(c.role)}</h3>
        <p class="career-card__desc">${escapeHtml(c.desc)}</p>
      </article>`
      )
      .join("");
  }

  function renderFaqs() {
    const el = document.getElementById("faqList");
    if (!el) return;
    el.innerHTML = data.faqs
      .map(
        (item, idx) => `
      <div class="faq-item ${idx === 0 ? "is-open" : ""}">
        <button type="button" class="faq-question" aria-expanded="${idx === 0 ? "true" : "false"}">
          <span>${escapeHtml(item.q)}</span>
          <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="faq-answer">${escapeHtml(item.a)}</div>
      </div>`
      )
      .join("");

    el.addEventListener("click", (e) => {
      const btn = e.target.closest(".faq-question");
      if (!btn) return;
      const item = btn.closest(".faq-item");
      const willOpen = !item.classList.contains("is-open");
      item.classList.toggle("is-open", willOpen);
      btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
  }

  /* -------------------- Event Listeners & Navigation -------------------- */
  function bindEvents() {
    // Pathway tabs
    document.querySelectorAll(".pathway-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        setPathwayMode(btn.getAttribute("data-mode"));
      });
    });

    // Jump buttons from Pathway Cards
    document.querySelectorAll(".js-jump-pathway").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetMode = btn.getAttribute("data-target-mode");
        setPathwayMode(targetMode);
        const explorerSection = document.getElementById("mon-hoc");
        if (explorerSection) {
          explorerSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Category filter pills
    const catContainer = document.getElementById("categoryPills");
    if (catContainer) {
      catContainer.addEventListener("click", (e) => {
        const pill = e.target.closest(".cat-pill");
        if (!pill) return;
        state.category = pill.getAttribute("data-cat");
        renderCategoryPills();
        renderCourses();
      });
    }

    // Search input
    const searchInput = document.getElementById("courseSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.search = e.target.value;
        renderCourses();
      });
    }

    // Course card clicks -> open modal
    const groupsContainer = document.getElementById("courseGroupsContainer");
    if (groupsContainer) {
      groupsContainer.addEventListener("click", (e) => {
        const card = e.target.closest(".course-card");
        if (!card) return;
        openCourseModal(card.getAttribute("data-course-id"), card);
      });
    }

    // Modal close events
    const closeBtn = document.getElementById("modalCloseBtn");
    const backdrop = document.getElementById("courseModalBackdrop");
    if (closeBtn) closeBtn.addEventListener("click", closeCourseModal);
    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeCourseModal();
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeCourseModal();
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener("click", () => {
        const open = !mobileMenu.classList.contains("is-open");
        mobileMenu.classList.toggle("is-open", open);
        mobileBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });

      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("is-open");
          mobileBtn.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Sticky Navbar shadow & active section highlight on scroll
    const navbar = document.getElementById("navbar");
    const sections = ["tong-quan", "yeu-cau", "lo-trinh", "mon-hoc", "faq"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const navLinks = Array.from(document.querySelectorAll(".navbar__link"));

    window.addEventListener(
      "scroll",
      () => {
        if (navbar) {
          navbar.classList.toggle("is-scrolled", window.scrollY > 12);
        }

        const scrollPos = window.scrollY + 140;
        let currentId = "";
        for (const sec of sections) {
          if (sec.offsetTop <= scrollPos) {
            currentId = sec.id;
          }
        }
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
        });
      },
      { passive: true }
    );
  }

  /* -------------------- Init -------------------- */
  function init() {
    renderQuickStats();
    renderPillars();
    renderRequirements();
    renderFitChecklist();
    renderPathwayComparison();
    renderCategoryPills();
    renderCourses();
    renderCareers();
    renderFaqs();
    bindEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
