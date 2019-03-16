import { InitializationModule } from './initialization.module';

describe('InitializationModule', () => {
  let initializationModule: InitializationModule;

  beforeEach(() => {
    initializationModule = new InitializationModule();
  });

  it('should create an instance', () => {
    expect(initializationModule).toBeTruthy();
  });
});
