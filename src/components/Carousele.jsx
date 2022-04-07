import React from 'react'
import "./Carousel.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Carousele() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    let arr=[
        {
            "heading":"world health day",
            "image":"https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX0Bz.img&ehk=904FWQ39bv%2bk5%2bEz3WBdpuPr8JwH6nS0Jbtqsraqj%2fI%3d&w=186&h=88&c=8&rs=2&o=6&pid=WP0"
        },
        {
            "heading":"world health day",
            "image":"https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX0Bz.img&ehk=904FWQ39bv%2bk5%2bEz3WBdpuPr8JwH6nS0Jbtqsraqj%2fI%3d&w=186&h=88&c=8&rs=2&o=6&pid=WP0"
        },
        {
            "heading":"world health day",
            "image":"https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX0Bz.img&ehk=904FWQ39bv%2bk5%2bEz3WBdpuPr8JwH6nS0Jbtqsraqj%2fI%3d&w=186&h=88&c=8&rs=2&o=6&pid=WP0"
        },
        {
            "heading":"world health day",
            "image":"https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX0Bz.img&ehk=904FWQ39bv%2bk5%2bEz3WBdpuPr8JwH6nS0Jbtqsraqj%2fI%3d&w=186&h=88&c=8&rs=2&o=6&pid=WP0"
        },
        {
            "heading":"world health day",
            "image":"https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX0Bz.img&ehk=904FWQ39bv%2bk5%2bEz3WBdpuPr8JwH6nS0Jbtqsraqj%2fI%3d&w=186&h=88&c=8&rs=2&o=6&pid=WP0"
        },
        {
            "heading":"world health day",
            "image":"https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX0Bz.img&ehk=904FWQ39bv%2bk5%2bEz3WBdpuPr8JwH6nS0Jbtqsraqj%2fI%3d&w=186&h=88&c=8&rs=2&o=6&pid=WP0"
        },
        {
            "heading":"world health day",
            "image":"https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX0Bz.img&ehk=904FWQ39bv%2bk5%2bEz3WBdpuPr8JwH6nS0Jbtqsraqj%2fI%3d&w=186&h=88&c=8&rs=2&o=6&pid=WP0"
        },
        {
            "heading":"world health day",
            "image":"https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX0Bz.img&ehk=904FWQ39bv%2bk5%2bEz3WBdpuPr8JwH6nS0Jbtqsraqj%2fI%3d&w=186&h=88&c=8&rs=2&o=6&pid=WP0"
        },
        {
            "heading":"world health day",
            "image":"https://www.bing.com/th?u=https%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fAAVX0Bz.img&ehk=904FWQ39bv%2bk5%2bEz3WBdpuPr8JwH6nS0Jbtqsraqj%2fI%3d&w=186&h=88&c=8&rs=2&o=6&pid=WP0"
        }


        

    ]
  return (
    <div  className='crouseldiv' style={{marginTop:"400px", width:"80%", marginLeft:"10%",background:"none"}}>
   
    <Carousel  responsive={responsive}>
    
    
    {arr.map((e)=>{
        return (
            <div className='item'>
            <div>{e.heading}</div>
            <img src={e.image}/>
            </div>
        )

    })}
    
    </Carousel>
    </div>
    
    
    
  )
}

export default Carousele