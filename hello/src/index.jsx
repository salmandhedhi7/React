import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Hi() {
  return <div>
  <div className='right text-[#e5e6ee]'>
    <p className='text-[1.3em]'>Contact</p>
    <p className='text-[1.3em]'>Phone</p>
    <p className='text-[0.8em]'>+92</p>
    <p className='text-[1.3em]'>Email</p>
    <p className='text-[0.8em]'>azeemansrai7@gmail.com</p>
    <p className='text-[1.3em]'>Address</p>
    <p className='text-[0.8em]'>Gulshane Iqbal, Metroville 3 Block 2, Abul Hasan Ispahani Road, Karachi</p>
    <p className='text-[1.3em]'>Softwares</p>
    <p className='text-[0.8em] flex justify-lef+t items-stat gap-[1em] flex-wrap'>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>MS Word</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>MS Excel</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>MS PowerPoint</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>MS Access</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>Adobe Photoshop</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>Urdu Inpage</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>HTML</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>CSS</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>Javascript (Es5)</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>Es6</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>Bootstrap 5</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>Firebase</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>Mongo DB</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>Express js</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>Node js</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>JWT Authentication</p>
    </p>
    <p className='text-[1.3em]'>Hobbies</p>
    <p className='text-[0.8em] flex justify-left items-stat gap-[1em] flex-wrap'>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>Travelling</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>Programming</p>
    <p className='p-[0.5em] rounded rounded-[10px] bg-[#444]'>Outdoor Activities</p>
    </p>

  
  </div>
  <div className='left'>
    <div className='flex justify-center items-center w-[100%]'>
      <p className='w-[100%] text-center text-[2em] text-[#2c323d]'>M.<span className='text-[#096e66]'>Salman</span></p>
    </div>
    <p className='text-[1.2em] text-[#096e66]'>Career Objective</p>
    <p>To offer my skills in an organization offering a visionary career track and a working environment that will enhance my skills and add value to the organization.</p>
    <p className='text-[1.2em] text-[#096e66]'>Work Experience</p>
    <ol className='flex flex-col gap-[0.5em] p-[1em]'>
      <li className='list-disc'>Web developer experience</li>
      <li>9 months experience as a web developer</li>  
      <li className='list-disc'>Property Dealer Experience</li>
      <li>6 months experience as a property dealer</li>  
      <li className='list-disc'>Internships</li>
      <li>One month remote internship at Lets Grow More</li>  
    </ol>
    <p className='text-[1.2em] text-[#096e66]'>Education</p>
    <ol className='flex flex-col gap-[0.5em] p-[1em]'>
      <li className='list-disc'></li>
      <li></li>  
      <li className='list-disc'></li>
      <li></li>
    </ol>
    <p className='text-[1.2em] text-[#096e66]'>Social Media</p>
    <div className='w-[100%] flex justify-between pl-[1em] pr-[1em] items-start flex-wrap gap-[1em]'>
    <a target='_blank' href="https://github.com/ahadsts9901" className='text-[1.5em] bi bi-github text-[#2c323d]'></a>
    <a target='_blank' href="https://linkedin.com/in/muhammad-ahad-3136b1236" className='text-[1.5em] bi bi-linkedin text-[#2c323d]'></a>
    <a target='_blank' href="https://wa.me/+923130019086" className='text-[1.5em] bi bi-whatsapp text-[#2c323d]'></a>
    <a target='_blank' href="https://www.facebook.com/abdulahad.ansari.1481/" className='text-[1.5em] bi bi-facebook text-[#2c323d]'></a>
    <a target='_blank' href="https://www.youtube.com/@AhadSTS/" className='text-[1.5em] bi bi-youtube text-[#2c323d]'></a>
    </div>
</div>;
</div>
}


ReactDOM.render(<Hi/>, document.querySelector('#root'));
