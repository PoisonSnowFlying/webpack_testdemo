import xxx from './c_extra';
export default 'c';
console.log(xxx());
function getModalMessage(callback, type, showOnice = false) {
    switch (type) {
        case 'pub':
           
            return {
                title: '任务奖励发放提示',
                content: [
                    '帖子内容10个字以下或文字30%以上重复的不发放奖励',
                    '3个字以下的评论不发放奖励，如“打卡”“666”“？？”等',
                ],
                desc: '真诚分享生活才会获得更多评论，更有机会获得至少3元加精奖励',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case 'comment':
            return {
                title: '任务小提示',
                content: ['评论需多于5字', '审核通过后可领取奖励', '每个帖子只能评论一次'],
                desc: '注：发布低质评论发现后将取消任务参与资格！',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case '32commentTask':
            return {
                title: '任务说明提示',
                content: showOnice
                    ? [
                        '所邀请新用户须从未在部落发过帖',
                        '每邀请一位新用户发帖得1元，每天最多得3元',
                        '所邀请新用户须发小区相关内容，过审即可',
                    ]
                    : [
                        '所邀请新用户须从未在部落发过帖',
                        '每邀请一位新用户发帖得1元，每天最多得3元',
                        '所邀请新用户须发小区相关内容，过审即可',
                        '任务奖励需手动领取，3日内有效，3日后自动失效',
                    ],
                desc: '',
                btntext: showOnice ? '好的,去邀请' : '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };
        case '30commentTask':
            return {
                title: '任务说明提示',
                content: [
                    '帖子奖励金额：0.3~0.5元，质量越好，金额越高',
                    '帖子需20字以上+有图或视频，与小区相关',
                    '奖励当日有效，领取后任务进度变为1/1',
                ],
                desc: '',
                btntext: '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };
        case '50commentTask':
            return {
                title: '任务说明提示',
                content: [
                    '帖子奖励金额：0.3~0.5元，质量越好，金额越高',
                    '帖子需30字以上，与工作相关',
                    '奖励当日有效，领取后任务进度变为1/1',
                ],
                desc: '',
                btntext: '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };

        case 'newpub':
           
            return {
                title: '任务小提示',
                content: ['帖子需多于20字', '帖子需有图片或视频', '内容需与小区相关'],
                desc: '注：发布低质内容将取消任务参与资格',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case 'jobpub':
            return {
                title: '任务小提示',
                content: ['帖子需多于30字', '内容需与工作话题相关'],
                desc: '注：发布低质内容将取消任务参与资格',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };

        default:
            return null;
    }
}
function getModalMessage1(callback, type, showOnice = false) {
    switch (type) {
        case 'pub':
           
            return {
                title: '任务奖励发放提示',
                content: [
                    '帖子内容10个字以下或文字30%以上重复的不发放奖励',
                    '3个字以下的评论不发放奖励，如“打卡”“666”“？？”等',
                ],
                desc: '真诚分享生活才会获得更多评论，更有机会获得至少3元加精奖励',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case 'comment':
            return {
                title: '任务小提示',
                content: ['评论需多于5字', '审核通过后可领取奖励', '每个帖子只能评论一次'],
                desc: '注：发布低质评论发现后将取消任务参与资格！',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case '32commentTask':
            return {
                title: '任务说明提示',
                content: showOnice
                    ? [
                        '所邀请新用户须从未在部落发过帖',
                        '每邀请一位新用户发帖得1元，每天最多得3元',
                        '所邀请新用户须发小区相关内容，过审即可',
                    ]
                    : [
                        '所邀请新用户须从未在部落发过帖',
                        '每邀请一位新用户发帖得1元，每天最多得3元',
                        '所邀请新用户须发小区相关内容，过审即可',
                        '任务奖励需手动领取，3日内有效，3日后自动失效',
                    ],
                desc: '',
                btntext: showOnice ? '好的,去邀请' : '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };
        case '30commentTask':
            return {
                title: '任务说明提示',
                content: [
                    '帖子奖励金额：0.3~0.5元，质量越好，金额越高',
                    '帖子需20字以上+有图或视频，与小区相关',
                    '奖励当日有效，领取后任务进度变为1/1',
                ],
                desc: '',
                btntext: '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };
        case '50commentTask':
            return {
                title: '任务说明提示',
                content: [
                    '帖子奖励金额：0.3~0.5元，质量越好，金额越高',
                    '帖子需30字以上，与工作相关',
                    '奖励当日有效，领取后任务进度变为1/1',
                ],
                desc: '',
                btntext: '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };

        case 'newpub':
           
            return {
                title: '任务小提示',
                content: ['帖子需多于20字', '帖子需有图片或视频', '内容需与小区相关'],
                desc: '注：发布低质内容将取消任务参与资格',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case 'jobpub':
            return {
                title: '任务小提示',
                content: ['帖子需多于30字', '内容需与工作话题相关'],
                desc: '注：发布低质内容将取消任务参与资格',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };

        default:
            return null;
    }
}
function getModalMessage2(callback, type, showOnice = false) {
    switch (type) {
        case 'pub':
           
            return {
                title: '任务奖励发放提示',
                content: [
                    '帖子内容10个字以下或文字30%以上重复的不发放奖励',
                    '3个字以下的评论不发放奖励，如“打卡”“666”“？？”等',
                ],
                desc: '真诚分享生活才会获得更多评论，更有机会获得至少3元加精奖励',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case 'comment':
            return {
                title: '任务小提示',
                content: ['评论需多于5字', '审核通过后可领取奖励', '每个帖子只能评论一次'],
                desc: '注：发布低质评论发现后将取消任务参与资格！',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case '32commentTask':
            return {
                title: '任务说明提示',
                content: showOnice
                    ? [
                        '所邀请新用户须从未在部落发过帖',
                        '每邀请一位新用户发帖得1元，每天最多得3元',
                        '所邀请新用户须发小区相关内容，过审即可',
                    ]
                    : [
                        '所邀请新用户须从未在部落发过帖',
                        '每邀请一位新用户发帖得1元，每天最多得3元',
                        '所邀请新用户须发小区相关内容，过审即可',
                        '任务奖励需手动领取，3日内有效，3日后自动失效',
                    ],
                desc: '',
                btntext: showOnice ? '好的,去邀请' : '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };
        case '30commentTask':
            return {
                title: '任务说明提示',
                content: [
                    '帖子奖励金额：0.3~0.5元，质量越好，金额越高',
                    '帖子需20字以上+有图或视频，与小区相关',
                    '奖励当日有效，领取后任务进度变为1/1',
                ],
                desc: '',
                btntext: '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };
        case '50commentTask':
            return {
                title: '任务说明提示',
                content: [
                    '帖子奖励金额：0.3~0.5元，质量越好，金额越高',
                    '帖子需30字以上，与工作相关',
                    '奖励当日有效，领取后任务进度变为1/1',
                ],
                desc: '',
                btntext: '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };

        case 'newpub':
           
            return {
                title: '任务小提示',
                content: ['帖子需多于20字', '帖子需有图片或视频', '内容需与小区相关'],
                desc: '注：发布低质内容将取消任务参与资格',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case 'jobpub':
            return {
                title: '任务小提示',
                content: ['帖子需多于30字', '内容需与工作话题相关'],
                desc: '注：发布低质内容将取消任务参与资格',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };

        default:
            return null;
    }
}
function getModalMessage3(callback, type, showOnice = false) {
    switch (type) {
        case 'pub':
           
            return {
                title: '任务奖励发放提示',
                content: [
                    '帖子内容10个字以下或文字30%以上重复的不发放奖励',
                    '3个字以下的评论不发放奖励，如“打卡”“666”“？？”等',
                ],
                desc: '真诚分享生活才会获得更多评论，更有机会获得至少3元加精奖励',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case 'comment':
            return {
                title: '任务小提示',
                content: ['评论需多于5字', '审核通过后可领取奖励', '每个帖子只能评论一次'],
                desc: '注：发布低质评论发现后将取消任务参与资格！',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case '32commentTask':
            return {
                title: '任务说明提示',
                content: showOnice
                    ? [
                        '所邀请新用户须从未在部落发过帖',
                        '每邀请一位新用户发帖得1元，每天最多得3元',
                        '所邀请新用户须发小区相关内容，过审即可',
                    ]
                    : [
                        '所邀请新用户须从未在部落发过帖',
                        '每邀请一位新用户发帖得1元，每天最多得3元',
                        '所邀请新用户须发小区相关内容，过审即可',
                        '任务奖励需手动领取，3日内有效，3日后自动失效',
                    ],
                desc: '',
                btntext: showOnice ? '好的,去邀请' : '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };
        case '30commentTask':
            return {
                title: '任务说明提示',
                content: [
                    '帖子奖励金额：0.3~0.5元，质量越好，金额越高',
                    '帖子需20字以上+有图或视频，与小区相关',
                    '奖励当日有效，领取后任务进度变为1/1',
                ],
                desc: '',
                btntext: '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };
        case '50commentTask':
            return {
                title: '任务说明提示',
                content: [
                    '帖子奖励金额：0.3~0.5元，质量越好，金额越高',
                    '帖子需30字以上，与工作相关',
                    '奖励当日有效，领取后任务进度变为1/1',
                ],
                desc: '',
                btntext: '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };

        case 'newpub':
           
            return {
                title: '任务小提示',
                content: ['帖子需多于20字', '帖子需有图片或视频', '内容需与小区相关'],
                desc: '注：发布低质内容将取消任务参与资格',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case 'jobpub':
            return {
                title: '任务小提示',
                content: ['帖子需多于30字', '内容需与工作话题相关'],
                desc: '注：发布低质内容将取消任务参与资格',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };

        default:
            return null;
    }
}
function getModalMessage4(callback, type, showOnice = false) {
    switch (type) {
        case 'pub':
           
            return {
                title: '任务奖励发放提示',
                content: [
                    '帖子内容10个字以下或文字30%以上重复的不发放奖励',
                    '3个字以下的评论不发放奖励，如“打卡”“666”“？？”等',
                ],
                desc: '真诚分享生活才会获得更多评论，更有机会获得至少3元加精奖励',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case 'comment':
            return {
                title: '任务小提示',
                content: ['评论需多于5字', '审核通过后可领取奖励', '每个帖子只能评论一次'],
                desc: '注：发布低质评论发现后将取消任务参与资格！',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case '32commentTask':
            return {
                title: '任务说明提示',
                content: showOnice
                    ? [
                        '所邀请新用户须从未在部落发过帖',
                        '每邀请一位新用户发帖得1元，每天最多得3元',
                        '所邀请新用户须发小区相关内容，过审即可',
                    ]
                    : [
                        '所邀请新用户须从未在部落发过帖',
                        '每邀请一位新用户发帖得1元，每天最多得3元',
                        '所邀请新用户须发小区相关内容，过审即可',
                        '任务奖励需手动领取，3日内有效，3日后自动失效',
                    ],
                desc: '',
                btntext: showOnice ? '好的,去邀请' : '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };
        case '30commentTask':
            return {
                title: '任务说明提示',
                content: [
                    '帖子奖励金额：0.3~0.5元，质量越好，金额越高',
                    '帖子需20字以上+有图或视频，与小区相关',
                    '奖励当日有效，领取后任务进度变为1/1',
                ],
                desc: '',
                btntext: '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };
        case '50commentTask':
            return {
                title: '任务说明提示',
                content: [
                    '帖子奖励金额：0.3~0.5元，质量越好，金额越高',
                    '帖子需30字以上，与工作相关',
                    '奖励当日有效，领取后任务进度变为1/1',
                ],
                desc: '',
                btntext: '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };

        case 'newpub':
           
            return {
                title: '任务小提示',
                content: ['帖子需多于20字', '帖子需有图片或视频', '内容需与小区相关'],
                desc: '注：发布低质内容将取消任务参与资格',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case 'jobpub':
            return {
                title: '任务小提示',
                content: ['帖子需多于30字', '内容需与工作话题相关'],
                desc: '注：发布低质内容将取消任务参与资格',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };

        default:
            return null;
    }
}
function getModalMessage5(callback, type, showOnice = false) {
    switch (type) {
        case 'pub':
           
            return {
                title: '任务奖励发放提示',
                content: [
                    '帖子内容10个字以下或文字30%以上重复的不发放奖励',
                    '3个字以下的评论不发放奖励，如“打卡”“666”“？？”等',
                ],
                desc: '真诚分享生活才会获得更多评论，更有机会获得至少3元加精奖励',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case 'comment':
            return {
                title: '任务小提示',
                content: ['评论需多于5字', '审核通过后可领取奖励', '每个帖子只能评论一次'],
                desc: '注：发布低质评论发现后将取消任务参与资格！',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case '32commentTask':
            return {
                title: '任务说明提示',
                content: showOnice
                    ? [
                        '所邀请新用户须从未在部落发过帖',
                        '每邀请一位新用户发帖得1元，每天最多得3元',
                        '所邀请新用户须发小区相关内容，过审即可',
                    ]
                    : [
                        '所邀请新用户须从未在部落发过帖',
                        '每邀请一位新用户发帖得1元，每天最多得3元',
                        '所邀请新用户须发小区相关内容，过审即可',
                        '任务奖励需手动领取，3日内有效，3日后自动失效',
                    ],
                desc: '',
                btntext: showOnice ? '好的,去邀请' : '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };
        case '30commentTask':
            return {
                title: '任务说明提示',
                content: [
                    '帖子奖励金额：0.3~0.5元，质量越好，金额越高',
                    '帖子需20字以上+有图或视频，与小区相关',
                    '奖励当日有效，领取后任务进度变为1/1',
                ],
                desc: '',
                btntext: '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };
        case '50commentTask':
            return {
                title: '任务说明提示',
                content: [
                    '帖子奖励金额：0.3~0.5元，质量越好，金额越高',
                    '帖子需30字以上，与工作相关',
                    '奖励当日有效，领取后任务进度变为1/1',
                ],
                desc: '',
                btntext: '知道啦',
                showOnice,
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };

        case 'newpub':
           
            return {
                title: '任务小提示',
                content: ['帖子需多于20字', '帖子需有图片或视频', '内容需与小区相关'],
                desc: '注：发布低质内容将取消任务参与资格',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                   
                    callback && callback();
                },
            };
        case 'jobpub':
            return {
                title: '任务小提示',
                content: ['帖子需多于30字', '内容需与工作话题相关'],
                desc: '注：发布低质内容将取消任务参与资格',
                btntext: '知道了',
                closeFn: () => { },
                btnFn: () => {
                    callback && callback();
                },
            };

        default:
            return null;
    }
}
