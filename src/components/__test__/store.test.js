import store from "../../redux/store";

describe('Todos redux state test', () => {
    it('Should initially set state to an empty array', () => {
        const state = store.getState()
        expect(state).toEqual([])
    })
})