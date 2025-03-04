import { SupportedLocale } from './locale';
import EventEmitter from './utils/event_emitter';

interface Events {
  localeChange: (locale: SupportedLocale) => void;
}

export const appEventEmitter = new EventEmitter<Events>();
