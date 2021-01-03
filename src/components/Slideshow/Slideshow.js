import './Slideshow.css'

export default function Slideshow()
{
    const pages = ['/', '/projects', '/contact']

    function GetPageIndex() {
        for (let i = 0; i < pages.length; i++)
        {
            if (pages[i] === window.location.pathname)
                return i;
        }

        return 0;
    }

    function GetSlideFrom() { // Returns the slide direction from which the user came from.
      // Returns -1 if user came from the previous slide.
      // Returns 0 if user came from an undefined page.
      // Returns 1 if the user came from the next slide.
      // etc...
        for (let i = 0; i < pages.length; i++) {
            console.log(document.referrer.split('/')[3])
            if (pages[i] === '/' + document.referrer.split('/')[3]) {
                return i - GetPageIndex();
            }
        }

        return 0;
    }

    function ChangePage(direction)
    {
        let pageNum = GetPageIndex()
        let sliderBtn

        if (direction < 0) {
            sliderBtn = document.getElementsByClassName('slide-left')[0]
        } else if (direction > 0) {
            sliderBtn = document.getElementsByClassName('slide-right')[0]
        }
        
        sliderBtn.classList.add('page-exit')
        sliderBtn.children[0].classList.add('page-slider-arrow-exit')

        setTimeout(() => {
            window.location.replace('http://localhost:3000' + pages[pageNum + direction])
        }, 500)
    }

    function GetSlideshowButtons() {
        let pageNum = GetPageIndex()
        let previousSlideDirection = GetSlideFrom()
        console.log(GetSlideFrom())

        if (pageNum > 0 && pageNum < pages.length - 1)
            return (
                <div className='slideshow-btns'>
                    <button className={'slide-left ' + (previousSlideDirection < 0 ? 'page-entrance' : 'first-page-entrance')} onClick={() => ChangePage(-1)}>
                        <i className='page-slider-arrow-entrance fas fa-arrow-left'></i>
                    </button>
                    <button className={'slide-right ' + (previousSlideDirection > 0 ? 'page-entrance' : 'first-page-entrance')} onClick={() => ChangePage(1)}>
                        <i className='page-slider-arrow-entrance fas fa-arrow-right'></i>
                    </button>
                </div>
            )
        else if (pageNum === 0 && pages.length - 1 > 0)
            return (
                <div className='slideshow-btns'>
                    <button className={'slide-right ' + (previousSlideDirection > 0 ? 'page-entrance' : 'first-page-entrance')} onClick={() => ChangePage(1)}>
                        <i className='page-slider-arrow-entrance fas fa-arrow-right'></i>
                    </button>
                </div>
            )
        else if (pageNum === pages.length - 1 && pages.length - 1 !== 0)
            return (
                <div className='slideshow-btns'>
                    <button className={'slide-left ' + (previousSlideDirection < 0 ? 'page-entrance' : 'first-page-entrance')} onClick={() => ChangePage(-1)}>
                        <i className='page-slider-arrow-entrance fas fa-arrow-left'></i>
                    </button>
                </div>
            )
    }

    return (
        <div className='slideshow'>
            { GetSlideshowButtons() }
        </div>
    )
}
