import WebFont from 'webfontloader';
import * as gsap from "gsap";

const preloadFonts = () => {
    return new Promise((resolve, reject) => {
        WebFont.load({
            google: { families: ["Poppins"] },
            active: resolve,
            inactive: reject
        });
    });
};

const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc[next.replace("./", "")] = require(next);
        return acc;
    }, {});

const loadImage = image => {
    return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
            setTimeout(() => {
                resolve(image)
            }, 2000)

        loadImg.onerror = err => reject(err)
    })
}

//** trail */

class Image {
    constructor(el) {
        this.DOM = { el: el };
        // image deafult styles
        this.defaultStyle = {
            scale: 1,
            x: 0,
            y: 0,
            opacity: 0
        };
        // get sizes/position
        this.getRect();
        // init/bind events
        this.initEvents();
    }
    initEvents() {
        // on resize get updated sizes/position
        window.addEventListener('resize', () => this.resize());
    }
    resize() {
        // reset styles
        gsap.gsap.set(this.DOM.el, this.defaultStyle);
        // get sizes/position
        this.getRect();
    }
    getRect() {
        this.rect = this.DOM.el.getBoundingClientRect();
    }
    isActive() {
        // check if image is animating or if it's visible
        return gsap.gsap.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0;
    }
}


function ImageTrailComp() {


    const body = document.body;
    const docEl = document.documentElement;
    // helper functions
    const MathUtils = {
        // linear interpolation
        lerp: (a, b, n) => (1 - n) * a + n * b,
        // distance between two points
        distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
    }

    // get the mouse position
    const getMousePos = (ev) => {
        let posx = 0;
        let posy = 0;
        if (!ev) ev = window.event;
        if (ev.pageX || ev.pageY) {
            posx = ev.pageX;
            posy = ev.pageY;
        }
        else if (ev.clientX || ev.clientY) {
            posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
            posy = ev.clientY + body.scrollTop + docEl.scrollTop;
        }
        return { x: posx, y: posy };
    }

    // mousePos: current mouse position
    // cacheMousePos: previous mouse position
    // lastMousePos: last last recorded mouse position (at the time the last image was shown)
    let mousePos = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };
    let cacheMousePos = { x: 0, y: 0 };
    // update the mouse position
    window.addEventListener('mousemove', ev => mousePos = getMousePos(ev));

    // gets the distance from the current mouse position to the last recorded mouse position
    const getMouseDistance = () => MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);



    function showNextImage(zIndexVal, img) {
        // show image at position [imgPosition]
        // kill any tween on the image
        gsap.gsap.killTweensOf(img.DOM.el);
        new gsap.gsap
            // show the image
            .set(img.DOM.el, {
                startAt: { opacity: 0, scale: 1 },
                opacity: 1,
                scale: 1,
                zIndex: zIndexVal,
                x: cacheMousePos.x - img.rect.width / 2,
                y: cacheMousePos.y - img.rect.height / 2
            }, 0).then(() => {
                gsap.gsap.to(img.DOM.el, 0.9, {
                    ease: gsap.Expo.easeOut,
                    x: mousePos.x - img.rect.width / 2,
                    y: mousePos.y - img.rect.height / 2
                }, 0)
                    .then(() => {
                        gsap.gsap.to(img.DOM.el, 1, {
                            ease: gsap.Quint.easeOut,
                            scale: 0.2,
                            opacity: 0
                        }, 0.2)

                        // .then(() => {
                        //     gsap.gsap.to(img.DOM.el, 1, {
                        //         ease: gsap.Power1.easeOut,
                        //         opacity: 0
                        //     }, 0.1)
                        // })
                    })
            })
    }




    function ImageTrail() {

        let DOM = { content: document.querySelector('.trail') };
        // array of Image objs, one per image element
        let images = [];
        [...DOM.content.querySelectorAll('img')].forEach(img => images.push(new Image(img)));

        // total number of images
        let imagesTotal = images.length;

        console.log("total", imagesTotal);
        // upcoming image index
        let imgPosition = 0;
        // zIndex value to apply to the upcoming image
        let zIndexVal = 1;
        // mouse distance required to show the next image
        let threshold = 100;
        // render the images
        // get distance between the current mouse position and the position of the previous image
        // return () => {
        // while (requestAnimationFrame) {
        //console.log("hi")
        const render = () => {
            let distance = getMouseDistance();
            // cache previous mouse position
            cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
            cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

            // if the mouse moved more than [threshold] then show the next image
            if (distance > threshold) {
                const img = images[imgPosition];
                showNextImage(zIndexVal, img);
                ++zIndexVal;
                imgPosition = imgPosition < imagesTotal - 1 ? imgPosition + 1 : 0;
                lastMousePos = mousePos;
            }

            // check when mousemove stops and all images are inactive (not visible and not animating)
            let isIdle = true;
            for (let img of images) {
                if (img.isActive()) {
                    isIdle = false;
                    break;
                }
            }
            // reset z-index initial value
            if (isIdle && zIndexVal !== 1) {
                zIndexVal = 1;
            }
            requestAnimationFrame(() => render());
        }
        requestAnimationFrame(() => render());


        // }
        // return render();
        // while (true) {
        // render();
        // }



    }
    return ImageTrail();
}


export {
    importAll,
    loadImage,
    preloadFonts,
    ImageTrailComp,
};