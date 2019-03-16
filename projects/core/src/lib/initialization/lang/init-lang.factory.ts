import { InitLangService } from './init-lang.service';

export function appInitializeLang(initLang: InitLangService) {
  return () => initLang.initialize();
}
