import React from 'react'

const Navbar = () => {
  return (
    <div class="box-border fixed m-0 top-0 left-2/4 bg-[rgb(255,_255,_255)] px-[40px] py-[20px] rounded-tl-[0] rounded-br-[var(--border-radius-large)] rounded-tr-[0] z-[4] rounded-bl-[var(--border-radius-large)] translate-x-[-50%] translate-y-[-10px]">
            <nav class="box-border relative m-0">
                <ul class="box-border relative m-0 p-0 flex items-center gap-[30px]">
                    <li class="font-[var(--font-serif)] box-border relative m-0 [list-style:none]">
                        <a href="/our-mission" class="box-border relative m-0 no-underline [color:inherit]">
                            <span class="box-border relative m-0">Our Mission</span>
                        </a>
                    </li>
                    <li class="font-[var(--font-serif)] box-border relative m-0 [list-style:none]">
                        <a href="/speech-archive" class="box-border relative m-0 no-underline [color:inherit]">
                            <span class="box-border relative m-0">Speech Archive</span>
                        </a>
                    </li>
                    <li class="font-[var(--font-serif)] box-border relative m-0 [list-style:none]">
                        <a href="/contribute" class="box-border relative m-0 no-underline [color:inherit]">
                            <span class="box-border relative m-0">Contribute</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <svg width="430" height="431" viewBox="0 0 430 431" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="box-border relative m-0 hidden max-w-full">
                <circle cx="134.697" cy="296.883" r="133.684" transform="rotate(-14.981 134.697 296.883)" fill="#5F00F6" class="box-border relative m-0"></circle>
                <path d="M68.009 273.167C65.1725 279.15 64.9308 286.573 67.2965 295.414L69.3397 303.049L79.9977 300.197L84.9724 318.788L68.269 323.257L61.4289 297.696C58.5254 286.846 58.8659 277.692 62.4408 270.201C66.0205 262.728 73.1346 257.547 83.8101 254.691L85.4091 260.666C76.6381 263.013 70.8454 267.185 68.0043 273.15L68.009 273.167ZM104.963 263.279C102.126 269.262 101.884 276.685 104.25 285.526L106.293 293.161L116.951 290.309L121.926 308.899L105.223 313.369L98.3824 287.807C95.479 276.957 95.8194 267.804 99.3944 260.313C102.974 252.839 110.088 247.659 120.764 244.802L122.363 250.778C113.592 253.125 107.799 257.296 104.958 263.261L104.963 263.279Z" fill="black" class="box-border relative m-0"></path>
                <path d="M201.391 320.599C204.227 314.617 204.469 307.194 202.103 298.353L200.06 290.717L189.402 293.569L184.428 274.979L201.131 270.509L207.971 296.071C210.874 306.921 210.534 316.074 206.959 323.566C203.379 331.039 196.265 336.219 185.59 339.076L183.991 333.101C192.762 330.754 198.554 326.582 201.396 320.617L201.391 320.599ZM164.437 330.488C167.274 324.505 167.516 317.082 165.15 308.241L163.107 300.606L152.449 303.458L147.474 284.868L164.177 280.398L171.018 305.96C173.921 316.81 173.581 325.963 170.006 333.454C166.426 340.928 159.312 346.108 148.636 348.965L147.037 342.989C155.808 340.642 161.601 336.471 164.442 330.505L164.437 330.488Z" fill="black" class="box-border relative m-0"></path>
                <circle cx="295.627" cy="133.81" r="133.684" transform="rotate(11.0402 295.627 133.81)" fill="#9D7A3C" class="box-border relative m-0"></circle>
                <path d="M246.103 83.2421C240.929 87.3741 237.456 93.9385 235.703 102.921L234.19 110.679L245.018 112.792L241.333 131.68L224.362 128.369L229.429 102.397C231.58 91.3732 235.902 83.2972 242.401 78.1339C248.896 72.9883 257.562 71.4541 268.408 73.5704L267.224 79.6416C258.312 77.9029 251.277 79.1101 246.107 83.2243L246.103 83.2421ZM283.649 90.5676C278.475 94.6996 275.002 101.264 273.249 110.247L271.735 118.004L282.564 120.117L278.879 139.005L261.908 135.694L266.975 109.723C269.126 98.6987 273.447 90.6227 279.946 85.4594C286.442 80.3138 295.107 78.7797 305.954 80.8959L304.769 86.9672C295.858 85.2284 288.822 86.4357 283.652 90.5499L283.649 90.5676Z" fill="black" class="box-border relative m-0"></path>
                <path d="M345.156 184.382C350.33 180.25 353.804 173.685 355.556 164.703L357.07 156.945L346.241 154.832L349.926 135.944L366.897 139.255L361.83 165.227C359.679 176.251 355.358 184.327 348.859 189.49C342.363 194.635 333.698 196.17 322.851 194.053L324.036 187.982C332.947 189.721 339.983 188.514 345.153 184.399L345.156 184.382ZM307.61 177.056C312.784 172.924 316.258 166.36 318.01 157.377L319.524 149.619L308.695 147.507L312.38 128.618L329.351 131.93L324.284 157.901C322.133 168.925 317.812 177.001 311.313 182.164C304.817 187.31 296.152 188.844 285.305 186.728L286.49 180.657C295.401 182.395 302.437 181.188 307.607 177.074L307.61 177.056Z" fill="black" class="box-border relative m-0"></path>
            </svg>
        </div>
  )
}

export default Navbar
