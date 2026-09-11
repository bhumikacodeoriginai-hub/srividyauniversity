// Resolve a public asset path against Vite's configured base URL so that
// images work whether the app is served from the domain root ("/") or from
// a sub-path such as GitHub Pages ("/srividyauniversity/").
//
// Usage: asset('/images/logo.webp')  ->  "/srividyauniversity/images/logo.webp"
export function asset(path) {
    const base = import.meta.env.BASE_URL || '/';
    const clean = String(path == null ? '' : path).replace(/^\/+/, '');
    return `${base}${clean}`;
}

export default asset;
