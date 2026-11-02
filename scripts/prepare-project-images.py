"""Encode selected original captures; keep a viewport preview and a full capture."""
from pathlib import Path
import json
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCES = Path(r'D:\PROJECT\SCREENSHOTS')
DEST = ROOT / 'src/assets/images/projects/curated'
SELECTION = {
    'melodia-home': 'Melodia/01-beranda-desktop.png',
    'melodia-search': 'Melodia/04-pencarian-desktop.png',
    'melodia-playlist': 'Melodia/10-detail-playlist-desktop.png',
    'melodia-admin': 'Melodia/06-admin-desktop.png',
    'melodia-mobile': 'Melodia/09-detail-album-mobile.png',
    'eagle-scan': 'SS-EagleJeans/Screenshot 2026-10-24 133246.png',
    'eagle-login': 'SS-EagleJeans/Screenshot 2026-10-24 132601.png',
    'reuse-storefront': 'SS-ReuseMart/web/Screenshot 2026-10-24 124859.png',
    'reuse-checkout': 'SS-ReuseMart/web/11_pembeli-checkout.png',
    'reuse-warehouse': 'SS-ReuseMart/web/27_gudang-beranda.png',
    'reuse-report': 'SS-ReuseMart/web/45_owner-laporan-komisi-bulanan.png',
    'reuse-mobile': 'SS-ReuseMart/mobile/05_pembeli-beranda-atas.png',
    'gym-home': '8_B_Gym_Screenshots/_tools/raw_after/06_home.png',
    'gym-trainers': '8_B_Gym_Screenshots/_tools/raw_after/09_layanan_trainer.png',
    'gym-booking': '8_B_Gym_Screenshots/_tools/raw_after/12_orderPage.png',
    'gym-payment': '8_B_Gym_Screenshots/_tools/raw_after/14_paymentPage.png',
    'gym-attendance': '8_B_Gym_Screenshots/_tools/raw_after/24_presensi.png',
    'tritis-home': 'ss_dusun_tritis/1-beranda.jpg',
    'tritis-profile': 'ss_dusun_tritis/2-profil.jpg',
    'tritis-potential': 'ss_dusun_tritis/3-potensi.jpg',
    'tritis-gallery': 'ss_dusun_tritis/4-galeri.jpg',
}

if __name__ == '__main__':
    DEST.mkdir(parents=True, exist_ok=True)
    manifest = []
    for name, source in SELECTION.items():
        image = Image.open(SOURCES / source).convert('RGB')
        phone = name.startswith(('gym-', 'eagle-')) or name in ('reuse-mobile', 'melodia-mobile')
        full = image.copy()
        full.thumbnail((1000, 2100) if phone else (2400, 1500) if name.startswith('melodia-') else (1600, 6000))
        preview = image.copy() if phone or name.startswith('melodia-') else image.crop((0, 0, image.width, min(image.height, 900)))
        preview.thumbnail((500, 1040) if phone else (1600, 1000) if name.startswith('melodia-') else (1440, 900))
        preview.save(DEST / f'{name}.webp', quality=88, method=6)
        full.save(DEST / f'{name}-full.webp', quality=90, method=6)
        manifest.append({'name': name, 'source': source, 'preview': preview.size, 'full': full.size})
    (DEST / 'sources.json').write_text(json.dumps(manifest, indent=2), encoding='utf-8')
