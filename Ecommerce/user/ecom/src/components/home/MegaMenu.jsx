import React, { Component, Fragment } from 'react'

class MegaMenu extends Component {
  
      constructor(){
        super();
        this.MegaMenu = this.MegaMenu.bind();
      }

      componentDidMount(){
        this.MegaMenu();
      }

      MegaMenu(){
        var acc = document.getElementsByClassName("accordion");
        var accNum = acc.length;
        var i;
        for(i=0; i<accNum;i++){
          acc[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if(panel.style.maxHeight){
              panel.style.maxHeight = null;
            }else{
              panel.style.maxHeight = panel.scrollHeight+ "px"
            }
          })
        }
      }

  render() {
    return (
        <div className='accordionMenuDiv'>
            <div className='accordionMenuDivInside' >
                
                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>

                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>

                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>

                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>

                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>

                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>

                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>

                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>

                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>

                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>

                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>

                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>

                <button className='accordion'>
                    <img className='accordionMenuIcon' src='https://img.freepik.com/free-icon/rotate_318-498904.jpg?size=626&ext=jpg' /> &nbsp;
                    Men's Clothing
                </button>
                
                <div className='panel' >
                  <ul>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 1</li>
                    <li> <a href='#' className='accordionItem' />Men's Tshirt 2</li>
                  </ul>
                </div>


            </div>

        </div>
    )
  }
}

export default MegaMenu
