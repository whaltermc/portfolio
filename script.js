const homeData = [
    { type: "device", title: "Device", content: "Xiaomi 11T 5G", content1: "8/256", content2: "Dimensity 1200 Ultra", url: "device.html" },
    { type: "guide", title: "Setup Guide", content: "Litematica", content1: "Replay Mod", editor: "WhalterMC", url: "guide.html" },
    { type: "info", title: "FAQ?", content: "Renderer: MobileGlues", url: ""},
];

const downloadsData = [
    { type: "file", title: "Aerodroid", developer: "", editor: "WhalterMC", url: "https://www.curseforge.com/minecraft/modpacks/aerodroid" },
    { type: "file", title: "Mellow and Stuffs", developer: "WhalterMC", editor: "", url: "https://www.curseforge.com/minecraft/modpacks/mellow-and-stuffs" },
    { type: "file", title: "Sodium 1.21.10", developer: "WhalterMC", editor: "", url: "https://www.dropbox.com/scl/fi/vac2d7yxuravud5gfhbcr/sodium-1.21.10-mods-folder.zip?rlkey=bds9t45z1xqmf3qwy90m0jtqq&st=jhtwbs78&dl=1" },
    { type: "file", title: "Sodium 1.21.8", developer: "WhalterMC", editor: "", url: "https://www.dropbox.com/scl/fi/mhea4z1hvep74ob735zmn/sodium_mods_folder_1.21.8.zip?rlkey=ity66fyouufr3lswmo1hb1k1n&st=rka5eqg5&dl=1" },
    { type: "file", title: "Sodium 1.21.4", developer: "WhalterMC", editor: "", url: "https://www.dropbox.com/scl/fi/fj7vawdfk77dzidc3yh9x/sodium-1.21.4-mods-folder.zip?rlkey=9hgwc6rse6tcgiffogvbxjykp&st=ezxlhw2i&dl=1" },
    { type: "file", title: "Sodium 1.21.1", developer: "WhalterMC", editor: "", url: "https://www.dropbox.com/scl/fi/nvyjh4ixdh5tslhp34rcd/sodium_mods_folder_1.21.1.zip?rlkey=4ifk5u0crd8wj45qdh03qc4n5&st=ekl20d06&dl=1" },
    { type: "file", title: "Create 1.21.1", developer: "WhalterMC", editor: "", url: "https://www.dropbox.com/scl/fi/8aubqavxj5ga14pyeyd1d/create_mod_1.21.1.zip?rlkey=b9yeccq1kbprmp2otfh2f7msy&st=hza4vcct&dl=1"}
];

let currentTab = 'home';
let currentLang = localStorage.getItem('portfolioLang') || 'en';

const translations = {
    en: {
        headerLogoHome: 'Home',
        headerLogoDownloads: 'Downloads',
        headerLogoDevice: 'Device',
        headerModGuides: 'Mod Guides',
        navSiteSub: 'Minecraft · Android · PH 🇵🇭',
        navHome: 'Home',
        navDownloads: 'Downloads',
        navGuide: 'Guide',
        navDevice: 'My Device',
        pageSubtitleGuide: 'Step-by-step tutorials for installing and using Minecraft mods on Android.',
        heroInstallLitematica: 'Install Litematica on ZalithLauncher2 and related Android clients',
        heroInstallLitematicaDesc: 'Follow clear steps for Fabric, schematics, and setup so you can build faster in Minecraft.',
        litematicaGuideTitle: 'Litematica Guide',
        availableNow: 'Available Now',
        litematicaGuideDesc: 'Complete guide to installing and using Litematica for building schematics on Android Minecraft.',
        readGuide: 'Read Guide',
        replayModGuideTitle: 'Replay Mod Guide',
        comingSoonBadge: 'Coming Soon',
        replayModGuideDesc: 'Learn how to record and replay Minecraft sessions using Replay Mod.',
        comingSoonButton: 'Coming Soon',
        footerText: 'WhalterMC 2026 - Nice People 67',
        followLabel: 'Hello, my real name is Jade!',
        donateTitleTiktok: 'TikTok',
        donateSubTiktok: 'Follow me on TikTok!',
        donateTitleYoutube: 'YouTube',
        donateSubYoutube: 'Subscribe!',
        tabHome: 'Home',
        tabDownloads: 'Downloads',
        devicePageSubtitle: 'The phone I use for all my Minecraft recording, testing, and modding.',
        deviceHeroDesc: 'Official Xiaomi 11T 5G used for my Minecraft recording and mod testing. Powered by MediaTek Dimensity 1200-Ultra, a 6.67" AMOLED 120Hz screen, and a 5000mAh battery.',
        litematicaPageTitle: 'Litematica Guide',
        litematicaPageSubtitle: 'Complete walkthrough for installing and using Litematica on Android Minecraft.',
        litematicaHeroTitle: 'Install Litematica on ZalithLauncher2 and related Android clients',
        litematicaHeroDesc: 'Follow clear steps for Fabric, schematics, and setup so you can build faster in Minecraft.',
        backToGuides: 'Back to Guides',
        notesHeading: 'Notes & tips',
        needMoreHelp: 'Need more help?',
        needMoreHelpBody: 'If the schematic does not appear, double-check the file path and Minecraft version, then reload the game.',
    },
    id: {
        headerLogoHome: 'Beranda',
        headerLogoDownloads: 'Unduhan',
        headerLogoDevice: 'Perangkat',
        headerModGuides: 'Panduan Mod',
        navSiteSub: 'Minecraft · Android · PH 🇵🇭',
        navHome: 'Beranda',
        navDownloads: 'Unduhan',
        navGuide: 'Panduan',
        navDevice: 'Perangkat Saya',
        pageSubtitleGuide: 'Tutorial langkah demi langkah untuk memasang dan menggunakan mod Minecraft di Android.',
        heroInstallLitematica: 'Pasang Litematica di ZalithLauncher2 dan klien Android terkait',
        heroInstallLitematicaDesc: 'Ikuti langkah yang jelas untuk Fabric, skematik, dan pengaturan agar Anda bisa membangun lebih cepat di Minecraft.',
        litematicaGuideTitle: 'Panduan Litematica',
        availableNow: 'Tersedia Sekarang',
        litematicaGuideDesc: 'Panduan lengkap untuk memasang dan menggunakan Litematica untuk membuat skematik di Android Minecraft.',
        readGuide: 'Baca Panduan',
        replayModGuideTitle: 'Panduan Replay Mod',
        comingSoonBadge: 'Segera Hadir',
        replayModGuideDesc: 'Pelajari cara merekam dan memutar ulang sesi Minecraft dengan Replay Mod.',
        comingSoonButton: 'Segera Hadir',
        footerText: 'WhalterMC 2026 - Orang Baik 67',
        followLabel: 'Halo, nama asli saya Jade!',
        donateTitleTiktok: 'TikTok',
        donateSubTiktok: 'Ikuti saya di TikTok!',
        donateTitleYoutube: 'YouTube',
        donateSubYoutube: 'Berlangganan!',
        tabHome: 'Beranda',
        tabDownloads: 'Unduhan',
        devicePageSubtitle: 'Telepon yang saya gunakan untuk semua perekaman, pengujian, dan modding Minecraft saya.',
        deviceHeroDesc: 'Xiaomi 11T 5G resmi yang digunakan untuk perekaman Minecraft dan pengujian mod saya. Ditenagai oleh MediaTek Dimensity 1200-Ultra, layar AMOLED 6,67" 120Hz, dan baterai 5000mAh.',
        litematicaPageTitle: 'Panduan Litematica',
        litematicaPageSubtitle: 'Panduan lengkap untuk memasang dan menggunakan Litematica di Android Minecraft.',
        litematicaHeroTitle: 'Pasang Litematica di ZalithLauncher2 dan klien Android terkait',
        litematicaHeroDesc: 'Ikuti langkah yang jelas untuk Fabric, skematik, dan pengaturan agar Anda dapat membangun lebih cepat di Minecraft.',
        backToGuides: 'Kembali ke Panduan',
        notesHeading: 'Catatan & tips',
        needMoreHelp: 'Perlu bantuan lebih lanjut?',
        needMoreHelpBody: 'Jika skematik tidak muncul, periksa jalur file dan versi Minecraft, lalu muat ulang game.',
    },
    cn: {
        headerLogoHome: '首页',
        headerLogoDownloads: '下载',
        headerLogoDevice: '设备',
        headerModGuides: 'Mod 指南',
        navSiteSub: 'Minecraft · Android · PH 🇵🇭',
        navHome: '首页',
        navDownloads: '下载',
        navGuide: '指南',
        navDevice: '我的设备',
        pageSubtitleGuide: '逐步教程，教你在 Android 上安装和使用 Minecraft 模组。',
        heroInstallLitematica: '在 ZalithLauncher2 和相关 Android 客户端上安装 Litematica',
        heroInstallLitematicaDesc: '按照清晰步骤安装 Fabric、结构图和设置，让你在 Minecraft 中更快构建。',
        litematicaGuideTitle: 'Litematica 指南',
        availableNow: '立即可用',
        litematicaGuideDesc: '完整指南，教你在 Android Minecraft 上安装并使用 Litematica 创建结构图。',
        readGuide: '阅读指南',
        replayModGuideTitle: 'Replay Mod 指南',
        comingSoonBadge: '敬请期待',
        replayModGuideDesc: '学习如何使用 Replay Mod 记录和回放 Minecraft 游戏。',
        comingSoonButton: '敬请期待',
        footerText: 'WhalterMC 2026 - 好人 67',
        followLabel: '你好，我的真名是 Jade！',
        donateTitleTiktok: 'TikTok',
        donateSubTiktok: '关注我的 TikTok！',
        donateTitleYoutube: 'YouTube',
        donateSubYoutube: '订阅！',
        tabHome: '首页',
        tabDownloads: '下载',
        devicePageSubtitle: '我用于所有 Minecraft 录制、测试和模组开发的手机。',
        deviceHeroDesc: '官方 Xiaomi 11T 5G，用于我的 Minecraft 录制和模组测试。由 MediaTek Dimensity 1200-Ultra 提供动力，拥有 6.67 英寸 AMOLED 120Hz 屏幕和 5000mAh 电池。',
        litematicaPageTitle: 'Litematica 指南',
        litematicaPageSubtitle: '在 Android Minecraft 上安装并使用 Litematica 的完整教程。',
        litematicaHeroTitle: '在 ZalithLauncher2 和相关 Android 客户端上安装 Litematica',
        litematicaHeroDesc: '按照清晰的步骤设置 Fabric、结构图和安装，让你在 Minecraft 中更快建造。',
        backToGuides: '返回指南',
        notesHeading: '注意事项与提示',
        needMoreHelp: '需要更多帮助？',
        needMoreHelpBody: '如果结构图未出现，请检查文件路径和 Minecraft 版本，然后重新加载游戏。',
    },
    ph: {
        headerLogoHome: 'Home',
        headerLogoDownloads: 'Downloads',
        headerLogoDevice: 'Device',
        headerModGuides: 'Mod Guides',
        navSiteSub: 'Minecraft · Android · PH 🇵🇭',
        navHome: 'Home',
        navDownloads: 'Downloads',
        navGuide: 'Gabay',
        navDevice: 'Aking Device',
        pageSubtitleGuide: 'Sunud-sunod na tutorial para i-install at gamitin ang Minecraft mods sa Android.',
        heroInstallLitematica: 'I-install ang Litematica sa ZalithLauncher2 at kaugnay na Android clients',
        heroInstallLitematicaDesc: 'Sundin ang malinaw na mga hakbang para sa Fabric, schematics, at setup upang makapagtayo ka nang mas mabilis sa Minecraft.',
        litematicaGuideTitle: 'Gabay sa Litematica',
        availableNow: 'Available Na',
        litematicaGuideDesc: 'Kumpletong gabay para sa pag-install at paggamit ng Litematica sa Android Minecraft.',
        readGuide: 'Basahin ang Gabay',
        replayModGuideTitle: 'Gabay sa Replay Mod',
        comingSoonBadge: 'Darating Na',
        replayModGuideDesc: 'Alamin kung paano mag-record at mag-replay ng Minecraft gamit ang Replay Mod.',
        comingSoonButton: 'Darating Na',
        footerText: 'WhalterMC 2026 - Nice People 67',
        followLabel: 'Kamusta, ang totoong pangalan ko ay Jade!',
        donateTitleTiktok: 'TikTok',
        donateSubTiktok: 'Sundan mo ako sa TikTok!',
        donateTitleYoutube: 'YouTube',
        donateSubYoutube: 'Mag-subscribe!',
        tabHome: 'Home',
        tabDownloads: 'Downloads',
        devicePageSubtitle: 'Ang teleponong ginagamit ko para sa lahat ng pag-record, pag-test, at modding ng Minecraft ko.',
        deviceHeroDesc: 'Opisyal na Xiaomi 11T 5G na ginagamit para sa aking pag-record ng Minecraft at pag-test ng mod. Pinapagana ng MediaTek Dimensity 1200-Ultra, isang 6.67" AMOLED 120Hz screen, at 5000mAh na baterya.',
        litematicaPageTitle: 'Gabay sa Litematica',
        litematicaPageSubtitle: 'Kumpletong walkthrough para sa pag-install at paggamit ng Litematica sa Android Minecraft.',
        litematicaHeroTitle: 'I-install ang Litematica sa ZalithLauncher2 at kaugnay na Android clients',
        litematicaHeroDesc: 'Sundin ang malinaw na mga hakbang para sa Fabric, schematics, at setup upang makapagtayo ka nang mas mabilis sa Minecraft.',
        backToGuides: 'Bumalik sa Mga Gabay',
        notesHeading: 'Mga Tala at Tip',
        needMoreHelp: 'Kailangan mo pa ng tulong?',
        needMoreHelpBody: 'Kung hindi lumabas ang schematic, suriin ang path ng file at bersyon ng Minecraft, pagkatapos i-reload ang laro.',
    },
    vn: {
        headerLogoHome: 'Trang chủ',
        headerLogoDownloads: 'Tải xuống',
        headerLogoDevice: 'Thiết bị',
        headerModGuides: 'Hướng dẫn Mod',
        navSiteSub: 'Minecraft · Android · PH 🇵🇭',
        navHome: 'Trang chủ',
        navDownloads: 'Tải xuống',
        navGuide: 'Hướng dẫn',
        navDevice: 'Thiết bị của tôi',
        pageSubtitleGuide: 'Hướng dẫn từng bước để cài đặt và sử dụng mod Minecraft trên Android.',
        heroInstallLitematica: 'Cài đặt Litematica trên ZalithLauncher2 và các client Android liên quan',
        heroInstallLitematicaDesc: 'Làm theo các bước rõ ràng cho Fabric, sơ đồ và cài đặt để bạn xây dựng nhanh hơn trong Minecraft.',
        litematicaGuideTitle: 'Hướng dẫn Litematica',
        availableNow: 'Có sẵn',
        litematicaGuideDesc: 'Hướng dẫn đầy đủ để cài đặt và sử dụng Litematica trên Android Minecraft.',
        readGuide: 'Đọc hướng dẫn',
        replayModGuideTitle: 'Hướng dẫn Replay Mod',
        comingSoonBadge: 'Sắp ra mắt',
        replayModGuideDesc: 'Học cách ghi và phát lại phiên chơi Minecraft bằng Replay Mod.',
        comingSoonButton: 'Sắp ra mắt',
        footerText: 'WhalterMC 2026 - Nice People 67',
        followLabel: 'Xin chào, tên thật của tôi là Jade!',
        donateTitleTiktok: 'TikTok',
        donateSubTiktok: 'Theo dõi tôi trên TikTok!',
        donateTitleYoutube: 'YouTube',
        donateSubYoutube: 'Đăng ký!',
        tabHome: 'Trang chủ',
        tabDownloads: 'Tải xuống',
        devicePageSubtitle: 'Điện thoại tôi dùng cho tất cả việc quay, thử nghiệm và modding Minecraft.',
        deviceHeroDesc: 'Xiaomi 11T 5G chính hãng dùng cho việc quay Minecraft và thử nghiệm mod của tôi. Trang bị MediaTek Dimensity 1200-Ultra, màn hình AMOLED 6,67" 120Hz và pin 5000mAh.',
        litematicaPageTitle: 'Hướng dẫn Litematica',
        litematicaPageSubtitle: 'Hướng dẫn đầy đủ để cài đặt và sử dụng Litematica trên Android Minecraft.',
        litematicaHeroTitle: 'Cài đặt Litematica trên ZalithLauncher2 và các client Android liên quan',
        litematicaHeroDesc: 'Làm theo các bước rõ ràng cho Fabric, sơ đồ và cài đặt để bạn xây dựng nhanh hơn trong Minecraft.',
        backToGuides: 'Quay lại Các hướng dẫn',
        notesHeading: 'Ghi chú & mẹo',
        needMoreHelp: 'Cần thêm trợ giúp?',
        needMoreHelpBody: 'Nếu schematic không xuất hiện, kiểm tra đường dẫn tệp và phiên bản Minecraft, sau đó tải lại trò chơi.',
    },
    ru: {
        headerLogoHome: 'Главная',
        headerLogoDownloads: 'Загрузки',
        headerLogoDevice: 'Устройство',
        headerModGuides: 'Руководства по модам',
        navSiteSub: 'Minecraft · Android · PH 🇵🇭',
        navHome: 'Главная',
        navDownloads: 'Загрузки',
        navGuide: 'Руководство',
        navDevice: 'Мое устройство',
        pageSubtitleGuide: 'Пошаговые инструкции по установке и использованию модов Minecraft на Android.',
        heroInstallLitematica: 'Установите Litematica на ZalithLauncher2 и связанные Android-клиенты',
        heroInstallLitematicaDesc: 'Следуйте понятным шагам для Fabric, схем и настройки, чтобы быстрее строить в Minecraft.',
        litematicaGuideTitle: 'Руководство по Litematica',
        availableNow: 'Доступно сейчас',
        litematicaGuideDesc: 'Полное руководство по установке и использованию Litematica для создания схем в Android Minecraft.',
        readGuide: 'Читать руководство',
        replayModGuideTitle: 'Руководство по Replay Mod',
        comingSoonBadge: 'Скоро',
        replayModGuideDesc: 'Узнайте, как записывать и воспроизводить сеансы Minecraft с помощью Replay Mod.',
        comingSoonButton: 'Скоро',
        footerText: 'WhalterMC 2026 - Nice People 67',
        followLabel: 'Привет, меня зовут Джейд!',
        donateTitleTiktok: 'TikTok',
        donateSubTiktok: 'Подписывайтесь на меня в TikTok!',
        donateTitleYoutube: 'YouTube',
        donateSubYoutube: 'Подпишитесь!',
        tabHome: 'Главная',
        tabDownloads: 'Загрузки',
        devicePageSubtitle: 'Телефон, который я использую для всех своих записей, тестов и моддинга Minecraft.',
        deviceHeroDesc: 'Официальный Xiaomi 11T 5G, который используется для записи Minecraft и тестирования модов. Работает на MediaTek Dimensity 1200-Ultra, с 6.67" AMOLED 120Hz экраном и аккумулятором 5000mAh.',
        litematicaPageTitle: 'Руководство по Litematica',
        litematicaPageSubtitle: 'Полное руководство по установке и использованию Litematica на Android Minecraft.',
        litematicaHeroTitle: 'Установите Litematica на ZalithLauncher2 и связанные Android-клиенты',
        litematicaHeroDesc: 'Следуйте понятным шагам для Fabric, схем и настройки, чтобы быстрее строить в Minecraft.',
        backToGuides: 'Назад к руководствам',
        notesHeading: 'Заметки и советы',
        needMoreHelp: 'Нужна помощь?',
        needMoreHelpBody: 'Если схема не отображается, проверьте путь к файлу и версию Minecraft, затем перезагрузите игру.',
    }
};

// Default icon per type — each is either a Material Symbols name or an image path
const typeIcons = {
    device: { kind: "font", value: "smartphone" },
    guide:  { kind: "font", value: "menu_book" },
    file:   { kind: "font", value: "description" },
    info: {kind: "font", value: "info"},
};

function renderIcon(data) {
    const icon = data.icon || typeIcons[data.type] || typeIcons.file;
    if (icon.kind === "image") {
        return `<img src="${icon.value}" alt="" class="item-icon-img" />`;
    }
    return `<span class="material-symbols-outlined">${icon.value}</span>`;
}

function buildDeviceItem(data, index) {
    const item = document.createElement('a');
    item.href = data.url;
    item.className = 'download-item';
    item.target = '_blank';
    item.style.animationDelay = `${0.05 + (index * 0.05)}s`;
    item.innerHTML = `
        <div class="item-icon">${renderIcon(data)}</div>
        <div class="item-content">
            <div class="item-title">${data.title}</div>
            <div class="badge-group">
                ${data.content ? `<div class="badge-row"><span class="meta-badge-new">Model: ${data.content}</span></div>` : ''}
                ${data.content1 ? `<div class="badge-row"><span class="meta-badge-new">Memory: ${data.content1}</span></div>` : ''}
                ${data.content2 ? `<div class="badge-row"><span class="meta-badge-new">Soc: ${data.content2}</span></div>` : ''}
            </div>
        </div>
        <span class="material-symbols-outlined arrow-icon">chevron_right</span>
    `;
    return item;
}

function buildGuideItem(data, index) {
    const item = document.createElement('a');
    item.href = data.url;
    item.className = 'download-item';
    item.target = '_blank';
    item.style.animationDelay = `${0.05 + (index * 0.05)}s`;
    item.innerHTML = `
        <div class="item-icon">${renderIcon(data)}</div>
        <div class="item-content">
            <div class="item-title">${data.title}</div>
            <div class="badge-group">
                ${data.content ? `<div class="badge-row"><span class="meta-badge">${data.content}</span></div>` : ''}
                ${data.content1 ? `<div class="badge-row"><span class="meta-badge">${data.content1}</span></div>` : ''}
                ${data.content2 ? `<div class="badge-row"><span class="meta-badge">${data.content2}</span></div>` : ''}
                ${data.editor ? `<div class="badge-row"><span class="meta-badge-new">Edited by ${data.editor}</span></div>` : ''}
            </div>
        </div>
        <span class="material-symbols-outlined arrow-icon">chevron_right</span>
    `;
    return item;
}

function buildFileItem(data, index) {
    const item = document.createElement('a');
    item.href = data.url;
    item.className = 'download-item';
    item.target = '_blank';
    item.style.animationDelay = `${0.05 + (index * 0.05)}s`;
    item.innerHTML = `
        <div class="item-icon">${renderIcon(data)}</div>
        <div class="item-content">
            <div class="item-title">${data.title}</div>
            <div class="badge-group">
                ${data.developer ? `<div class="badge-row"><span class="meta-badge">Developer: ${data.developer}</span></div>` : ''}
                ${data.editor ? `<div class="badge-row"><span class="meta-badge-new">Edited by ${data.editor}</span></div>` : ''}
            </div>
        </div>
        <span class="material-symbols-outlined arrow-icon">chevron_right</span>
    `;
    return item;
}

function buildItem(data, index) {
    switch (data.type) {
        case 'device': return buildDeviceItem(data, index);
        case 'guide':  return buildGuideItem(data, index);
        case 'info': return buildGuideItem(data, index);
        default:       return buildFileItem(data, index);
    }
}

function renderList() {
    const container = document.getElementById('downloadList');
    if (!container) return;
    container.innerHTML = '';
    const data = currentTab === 'home' ? homeData : downloadsData;
    data.forEach((entry, index) => {
        container.appendChild(buildItem(entry, index));
    });
}

function switchTab(tab) {
    currentTab = tab;
    const homeBtn = document.getElementById('homeTabBtn');
    const downloadsBtn = document.getElementById('downloadsTabBtn');
    const headerText = document.getElementById('headerLogoText');
    if (!homeBtn || !downloadsBtn) return;

    if (tab === 'home') {
        homeBtn.classList.add('active');
        downloadsBtn.classList.remove('active');
        if (headerText) headerText.textContent = translations[currentLang]?.tabHome || 'Home';
    } else {
        downloadsBtn.classList.add('active');
        homeBtn.classList.remove('active');
        if (headerText) headerText.textContent = translations[currentLang]?.tabDownloads || 'Downloads';
    }

    renderList();
}

function applyTranslations() {
    const strings = translations[currentLang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (!key || !(key in strings)) return;
        const value = strings[key];
        if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
            el.placeholder = value;
        } else if (el.hasAttribute('data-i18n-html')) {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });
}

function setLanguage(lang) {
    currentLang = translations[lang] ? lang : 'en';
    localStorage.setItem('portfolioLang', currentLang);
    document.getElementById('currentLangLabel').innerText = (lang === 'en' ? 'EN' : lang.toUpperCase());
    applyTranslations();
}

function initLangPopup() {
    const langWrapper = document.getElementById('langPopupWrapper');
    const langBtn = document.getElementById('langBtn');
    if (!langWrapper || !langBtn) return;

    document.addEventListener('click', (e) => {
        if (!langWrapper.contains(e.target)) langWrapper.classList.remove('active');
    });

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langWrapper.classList.toggle('active');
    });

    const labels = { en: 'EN', id: 'ID', cn: 'CN', ph: 'PH', vn: 'VN', ru: 'RU' };

    document.querySelectorAll('[data-lang]').forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.dataset.lang;
            setLanguage(lang);
            langWrapper.classList.remove('active');
        });
    });
}

document.getElementById('homeTabBtn')?.addEventListener('click', () => switchTab('home'));
document.getElementById('downloadsTabBtn')?.addEventListener('click', () => switchTab('downloads'));

document.getElementById('headerLogo')?.addEventListener('click', () => {
    switchTab(currentTab === 'home' ? 'downloads' : 'home');
});

initLangPopup();
setLanguage(currentLang);
switchTab('home');

// ── Navigation Drawer (device.html, guide.html, downloads.html, litematic.html) ──
function initNavDrawer() {
    const drawer = document.getElementById('nav-drawer');
    const scrim = document.getElementById('nav-scrim');
    const toggle = document.getElementById('nav-toggle');
    if (!drawer) return;

    function openNav() {
        drawer.classList.add('open');
        scrim?.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }
    function closeNav() {
        drawer.classList.remove('open');
        scrim?.classList.remove('visible');
        document.body.style.overflow = '';
    }

    toggle?.addEventListener('click', openNav);
    scrim?.addEventListener('click', closeNav);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeNav();
    });

    // Highlight the active nav item based on current path
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item a').forEach((link) => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === currentPage) {
            link.closest('.nav-item').classList.add('active');
        }
    });
}

// ── Ripple Effect (any .ripple-container element) ──
function initRipple() {
    function createRipple(event) {
        const el = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(el.clientWidth, el.clientHeight);
        const radius = diameter / 2;
        const rect = el.getBoundingClientRect();
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple');
        el.querySelector('.ripple')?.remove();
        el.appendChild(circle);
    }
    document.querySelectorAll('.ripple-container').forEach((el) => {
        el.addEventListener('click', createRipple);
    });
}

// ── Downloads page: search + Mods/Modpacks tab switch ──
function initDownloadsPage() {
    const modsList = document.getElementById('modsList');
    const modpacksList = document.getElementById('modpacksList');
    const modsTabBtn = document.getElementById('modsTabBtn');
    const modpacksTabBtn = document.getElementById('modpacksTabBtn');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('noResults');
    const resultCount = document.getElementById('resultCount');
    if (!modsList || !modpacksList) return;

    let activeList = modsList;

    function updateResultInfo(visible, total) {
        if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
        if (resultCount) resultCount.textContent = visible === total ? '' : `Showing ${visible} of ${total}`;
    }

    function filterList() {
        const query = (searchInput?.value || '').trim().toLowerCase();
        const items = activeList.querySelectorAll('.download-item');
        let visible = 0;
        items.forEach((item) => {
            const name = (item.dataset.name || item.textContent).toLowerCase();
            const match = !query || name.includes(query);
            item.style.display = match ? '' : 'none';
            if (match) visible++;
        });
        updateResultInfo(visible, items.length);
    }

    function switchDownloadsTab(tab) {
        if (tab === 'mods') {
            activeList = modsList;
            modsList.style.display = 'flex';
            modpacksList.style.display = 'none';
            modsTabBtn?.classList.add('active');
            modpacksTabBtn?.classList.remove('active');
        } else {
            activeList = modpacksList;
            modpacksList.style.display = 'flex';
            modsList.style.display = 'none';
            modpacksTabBtn?.classList.add('active');
            modsTabBtn?.classList.remove('active');
        }
        if (searchInput) searchInput.value = '';
        filterList();
    }

    modsTabBtn?.addEventListener('click', () => switchDownloadsTab('mods'));
    modpacksTabBtn?.addEventListener('click', () => switchDownloadsTab('modpacks'));
    searchInput?.addEventListener('input', filterList);

    switchDownloadsTab('mods');
}

initNavDrawer();
initRipple();
initDownloadsPage();
