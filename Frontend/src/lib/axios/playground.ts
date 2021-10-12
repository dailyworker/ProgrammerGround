import { getData, patchData, postData, putData, deleteData } from './request';

const url = {
export const url = {
	GET_JWT_TOKEN: 'http://localhost:8080/jwtLogin',
	GET_OAUTH_TOKEN: 'http://localhost:8080/oauth2/authorization/github',
	GET_ALL_PLAYGROUND: 'http://localhost:9000/playground',
	CREATE_PLAYGROUND: 'http://localhost:9000/playground',
	GET_ONE_PLAYGROUND: 'http://localhost:9000/playground/',
	CREATE_IMAGE_PLAYGROUND: 'http://localhost:9000/images/pgmainimg/',
	GET_ONE_USER: 'http://localhost:9000/user',
	PATCH_ONE_USER: 'http://localhost:9000/user',
	DELETE_ONE_PLAYGROUND: 'http://localhost:9000/playground/',
	GET_POSITION_LIST:'http://localhost:9000/playground/',
	APPLY_PLAYGROUND: 'http://localhost:9000/playground/',
	GET_NOTICE_LEADER: 'http://localhost:9000/user/notices/leader',
	GET_NOTICE_WAITING: 'http://localhost:9000/user/notices/waitings',
	GET_NOTICE_RESULT: 'http://localhost:9000/user/notices/results',
	PUT_APPLY_ACCEPT: 'http://localhost:9000/playground/applicants/',
	PUT_APPLY_REJECT: 'http://localhost:9000/playground/applicants/'

};

// eslint-disable-next-line import/prefer-default-export
export const getAllPlaygrounds = async () => {
	const playgrounds = await getData(url.GET_ALL_PLAYGROUND);
	return playgrounds;
};

export const createPlayground = async (playgroundData: any, type: string) => {
	const playground = await postData(
		url.CREATE_PLAYGROUND,
		playgroundData,
		type,
	);
	return playground;
};

export const getOnePlayground = async (playgroundId: number) => {
	const playground = await getData(`${url.GET_ONE_PLAYGROUND}${playgroundId}`);
	return playground;
};

export const getOneUser = async () => {
	const user = await getData(`${url.GET_ONE_USER}`);
	return user;
};

export const deleteOnePlayground = async (playgroundId: number) => {
	const playground = await deleteData(`${url.DELETE_ONE_PLAYGROUND}${playgroundId}`, 'delete');
	return playground;
};

export const patchOneUser = async(userName: string, type:string) => {
	const user = await patchData(`${url.PATCH_ONE_USER}`, userName, type);
	return user;
}

export const getPositionList = async (playgroundId: number) => {
	const positionList = await getData(`${url.GET_POSITION_LIST}${playgroundId}/slots`);
	return positionList;
}

export const createApplyRequest = async (applyPlayground: any, playgroundId: number) => {
	const createApply = await postData(`${url.APPLY_PLAYGROUND}${playgroundId}/apply`, applyPlayground, 'apply');
	return createApply;
}

export const getNoticeLeaderList = async () => {
	const noticeList = await getData(`${url.GET_NOTICE_LEADER}`);
	return noticeList;
}

export const getNoticeWaitingList = async () => {
	const waitList = await getData(`${url.GET_NOTICE_WAITING}`);
	return waitList;
}

export const getNoticeResult = async () => {
	const resultList = await getData(`${url.GET_NOTICE_RESULT}`);
	return resultList;
}

export const applyAcceptPlayground = async (playgroundApplyId: number) => {
	const acceptPlayground = await putData(`${url.PUT_APPLY_ACCEPT}${playgroundApplyId}/accept`);
	return acceptPlayground;
}

export const applyRejectPlayground = async (playgroundApplyId: number) => {
	const rejectPlayground = await putData(`${url.PUT_APPLY_REJECT}${playgroundApplyId}/reject`);
	return rejectPlayground;
}