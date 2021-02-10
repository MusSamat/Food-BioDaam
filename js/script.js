window.addEventListener(('DOMContentLoaded'), () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items')


    function hideTabContent(){
        tabsContent.forEach(item => {
           item.classList.add('hide')
            item.classList.remove('show')
        })

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent()

    tabParent.addEventListener('click', event => {
        const target = event.target
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i) =>{
                if(target === item){
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })

    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]')
    const modal = document.querySelector('.modal')
    const modalClsBtn = document.querySelector('[data-close]')


    function showModal(){
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () =>{
            showModal()
        })
    })

    function hideModal() {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow =''
    }

    modalClsBtn.addEventListener('click', event =>{
        const target = event.target
        if(target){
            hideModal()
        }
    })

    modal.addEventListener('click', e => {
        if(e.target === modal){
            hideModal()
        }
    })


    //MenuCard

    class MenuCard {
        constructor(img, alt, title, descrb, price, parentSelector, ...classes) {
            this.img = img
            this.alt = alt
            this.title = title
            this.descrb = descrb
            this.price = price
            this.classes = classes
            this.dollar = 27
            this.parent = document.querySelector(parentSelector)
        }

        changeToUAH() {
            return this.price = this.price * this.dollar
        }

        render() {
            const element = document.createElement('div')
            if(this.classes.length === 0){
                this.element = 'menu__item'
                element.classList.add(this.element)
            }else {
                this.classes.forEach(className => element.classList.add(className))
            }

            element.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descrb}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.changeToUAH()}</span> грн/день</div>
                </div>
            `

            this.parent.append(element)
        }
    }

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных ' +
        'и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        27,
        '.menu .container',
        // '.menu__item'
    ).render()

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных ' +
        'и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        27,
        '.menu .container',
        'menu__item'
    ).render()

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных ' +
        'и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        27,
        '.menu .container',
        'menu__item'
    ).render()
})
