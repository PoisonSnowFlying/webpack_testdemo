import React from 'react';
import ReactDOM from 'react-dom';
import { AsyncSeriesWaterfallHook } from 'tapable'
const A = () => {
    const asyncSeriesWaterfallHook = new AsyncSeriesWaterfallHook(['first', 'second']);
    const init = () => {
        asyncSeriesWaterfallHook.tapPromise('first', (...args) => {
            console.log(args);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        console.log('串行执行first');
                        //resolve('来自first的参数');
                        const s= 12 + aassssx;
                        reject('来自first的参数,错误');
                        // console.log(aassssx);
                    } catch(e) {
                        reject(e);
                    }
                }, 2000);
            })
        });
        asyncSeriesWaterfallHook.tapPromise('second', (...args) => {
            console.log(args);
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve('来自second的参数');
                    console.log('串行执行second');
                }, 2000);
            })
        });
    }
    React.useEffect(() => {
        // new Promise((resolve,reject)=> {
        //     setTimeout(()=> {
        //         try {
        //             console.log(aaa);
        //         } catch(e) {
        //             console.log(e);
        //         }
        //     },2000);
        // }).catch((err)=> {
        //     console.log(err,111);
        // })
        // init();
        // asyncSeriesWaterfallHook.promise(1, 2).then((data) => {
        //     console.log(data);
        //     console.log('执行结束');
        // }).catch((err)=> {
        //     console.log(err);
        // })
        const a = new Promise((resolve,reject)=> {
            resolve(11);
        });
        async function  test () {
            try {
                const x = await a;
                console.log(x);
            } catch(e) {
                 console.log(e);
            }
        }
        test();
    }, []);
    return <div>11</div>
}
ReactDOM.render(<A />, document.querySelector('#app'));
(function anonymous(first, second
) {
    "use strict";
    var _context;
    var _x = this._x;
    return new Promise((function (_resolve, _reject) {
        var _sync = true;
        function _error(_err) {
            if (_sync)
                _resolve(Promise.resolve().then((function () { throw _err; })));
            else
                _reject(_err);
        };
        function _next0() {
            var _fn1 = _x[1];
            var _hasResult1 = false;
            var _promise1 = _fn1(first, second);
            if (!_promise1 || !_promise1.then)
                throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
            _promise1.then((function (_result1) {
                _hasResult1 = true;
                if (_result1 !== undefined) {
                    first = _result1;
                }
                _resolve(first);
            }), function (_err1) {
                if (_hasResult1) throw _err1;
                _error(_err1);
            });
        }
        var _fn0 = _x[0];
        var _hasResult0 = false;
        var _promise0 = _fn0(first, second);
        if (!_promise0 || !_promise0.then)
            throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
        _promise0.then((function (_result0) {
            _hasResult0 = true;
            if (_result0 !== undefined) {
                first = _result0;
            }
            _next0();
        }), function (_err0) {
            if (_hasResult0) throw _err0;
            _error(_err0);
        });
        _sync = false;
    }));

})