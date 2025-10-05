/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_FB_API: string;
	readonly VITE_FB_AUTHDOMAIN: string;
	readonly VITE_FB_PROJECTID: string;
	readonly VITE_FB_STORAGE_BUCKET: string;
	readonly VITE_FB_MESSAGINGSENDERID: string;
	readonly VITE_FB_APPID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
