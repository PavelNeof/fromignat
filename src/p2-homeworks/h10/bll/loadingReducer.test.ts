import {loadingAC, loadingReducer} from "./loadingReducer";


test('change loading on true', () => {
    // 1. Тестовые данные:
    const booleanChange = true
    const startState = {
        loading: false
    }

    // 2. Вызов тестируемой функции:
    const endState = loadingReducer(startState, loadingAC(booleanChange))
    // 3. Сверка результата c ожиданием:
    expect(endState.loading).toBe(true);
});