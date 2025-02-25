const state = {
    parent_file_id: "root",
    video_info: null,
    isOpen: false,
    favorite: 'file',
    routers: [{ name: '首页', path: 'root' }],
}
const actions = {}
const mutations = {
    SET_PARENT_FILE_ID(state, payload) {
        state.parent_file_id = payload
    },
    SET_VIDEO_INFO(state, payload) {
        state.video_info = payload
    },
    SET_IS_OPEN(state, payload) {
        state.isOpen = payload
    },
    SET_ROUTER(state, payload) {
        let temp = state.routers.pop()
        if (!temp.name.includes('结果')) {
            state.routers.push(temp)
            temp = null
        }
        state.routers.push(payload)
    },
    REMOVE_ROUTER(state, payload) {
        state.routers.splice(payload, 100)
    },
    SET_FAVORITE(state, payload) {
        state.favorite = payload
    },
}
const getters = {}



export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}