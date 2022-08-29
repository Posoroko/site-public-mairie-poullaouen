//applying color styles to sections


const styleSections = () => {
    
    const waitForDom = () => {
        setTimeout(() => {
            if (document.querySelectorAll('.sectionBandeau').length > 0) {
                applyStyles()
            } else {
                waitForDom()
            }
        }, 10)
    }

    const applyStyles = () => {
        let nodeList = document.querySelectorAll('.sectionBandeau')

        for(let i = 0; i <= nodeList.length - 1; i = i + 2) {
            nodeList[i].firstElementChild.style.color = "var(--darkblue)"
        }
    
        //set blue background and light text
        for(let i = 1; i <= nodeList.length - 1; i = i + 4) {
            nodeList[i].style.backgroundColor = 'var(--darkblue)'
            nodeList[i].firstElementChild.style.color = "var(--lighttext)"
        }
    
        //set brown background, light text and light feet
        for(let i = 3; i <= nodeList.length -1; i = i + 4) {
            nodeList[i].style.backgroundColor = 'var(--brown)'
            nodeList[i].firstElementChild.style.color = "var(--lighttext)"
        }

        //set white left feet on brown sections
        nodeList = document.querySelectorAll('.leftFoot')
        for(let i = 3; i <= nodeList.length -1; i = i + 4) {
            nodeList[i].style.fill = "white";
        }
        //set white right feet on brown sections
        nodeList = document.querySelectorAll('.rightFoot')
        for(let i = 3; i <= nodeList.length -1; i = i + 4) {
            nodeList[i].style.fill = "white";
        }
        //set order of text and image

        nodeList = document.querySelectorAll('.sectionBox1')
        for(let i = 1; i <= nodeList.length -1; i = i + 2) {
            nodeList[i].style.order = "2";
        }
        nodeList = document.querySelectorAll('.sectionBox2')
        for(let i = 1; i <= nodeList.length -1; i = i + 2) {
            nodeList[i].style.order = "1";
        }

    }
    waitForDom()
}

export default styleSections