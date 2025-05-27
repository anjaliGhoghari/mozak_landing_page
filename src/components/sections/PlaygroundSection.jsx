import React, { useState } from 'react'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import flash from '../../assets/icons/flash.svg';
import usersettings from '../../assets/icons/user-settings.svg';
import robot from '../../assets/icons/robot.svg';
import focus_3 from '../../assets/icons/focus-3.svg';
import stack from '../../assets/icons/stack.svg';
import hand_coin from '../../assets/icons/hand-coin.svg';
import aliens from '../../assets/icons/aliens.svg';
import profile_pic from '../../assets/images/profile-pic.png';
import wallet from '../../assets/icons/wallet-3.svg';
import group from '../../assets/icons/group.svg';
import contacts_book from '../../assets/icons/contacts-book.svg';
import file_copy from '../../assets/icons/file-copy.svg';
import twitter from '../../assets/icons/twitter.svg';
import share from '../../assets/icons/share-forward.svg';
import owl_flash from '../../assets/icons/owl-flash.svg';
import information from '../../assets/icons/information.svg';
import up_green from '../../assets/icons/up-green.svg';
import down_red from '../../assets/icons/down-red.svg';
import twitter_simple from '../../assets/icons/twitter-simple.svg';
import telegram from '../../assets/icons/telegram.svg';
import black_white from '../../assets/icons/black-white.svg';




function PlaygroundSection() {
    const [tooltipContent, setTooltipContent] = useState('Copy');
    const handleCopy = (text) => {
        const textToCopy = text;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setTooltipContent('Copied!');
            setTimeout(() => setTooltipContent('Copy'), 2000); // reset to "Copy" after 1.5s
        });
    };
    return (
        <>
            <section className='container pt-8'>
                <div className='bg-black p-24 px-24'>
                    <div>
                        <div className='flex items-center justify-between mb-20'>
                            <h2 className='text-white'>Made for<br />
                                <span className=' text-sky-400 '> Mass adoption</span>
                            </h2>
                            <button className="btn btn-black group ">
                                Learn more

                            </button>
                        </div>
                        <div className='flex items-center text-center flex-wrap '>
                            <div className='card group '>
                                <i className='fa-solid fa-code text-6xl text-transparent cardi mt-3 group-hover:text-sky-400'></i>
                                <div className=' mb-5 mt-8 font-serif font-bold text-sky-400 text-3xl'>Web Development</div>
                                <div className='text-center opacity-75'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolore amet pariatur
                                    delectus dolores? Blanditiis ullam explicabo odit dicta quaerat!sit amet consectetur adipisicing elit. </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center py-20'>
                            <div className='bg-[#171717] p-4 rounded-[28px] '>
                                <div className='mb-4 flex gap-3'>
                                    <div>
                                        <img src={profile_pic} id='profile_picture' className='size-[72px] cursor-pointer' />
                                        <Tooltip anchorSelect="#profile_picture" content="Graduation period time" className='!tooltip' />
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-1 text-center justify-center'>
                                            <p className='text-white text-[22px] font-semibold leading-[0]'>Dino</p>
                                            <p className='text-[#C3C6CC] text-[15px] font-medium'>$DNO</p>
                                            <p id='created-time' className='text-[#C3C6CC] text-[11px] font-medium cursor-pointer'>29s ago
                                                <Tooltip anchorSelect="#created-time" className='!tooltip' place='top'>
                                                    Created ago time
                                                </Tooltip>
                                            </p>
                                            <div id='logos' className='bg-[rgba(252,191,4,0.12)] flex items-center gap-[2px] pl-1 pr-1 py-[2px] rounded-[8px] cursor-pointer'>
                                                <img src={owl_flash} alt="Owl Flash" className='w-[10px] h-[10px]' />
                                                <img src={information} alt="Information" className='w-[10px] h-[10px]' />
                                                <Tooltip anchorSelect="#logos" className='!tooltip' place='top'>
                                                    DexScreener paid/unpaid (refer DexScreener boosts for context)<br /><br />If paid then it will show this pill and if unpaid then no pill in card
                                                </Tooltip>
                                            </div>
                                        </div>

                                        <div className='flex gap-[6px] mb-4'>
                                            <p id='CA' className='text-[11px] text-[#C3C6CC] font-medium'>CA: 0x7e...9F27
                                                <Tooltip anchorSelect="#CA" className='!tooltip' place='bottom'>
                                                    CA: Ox7egh43kmo9p1w8je9f27
                                                </Tooltip>
                                            </p>
                                            <img id="copy" onClick={()=>handleCopy("CA: Ox7egh43kmo9p1w8je9f27")} src={file_copy} alt="Copy icon" className="cursor-pointer" />
                                            <Tooltip anchorSelect="#copy" className='!tooltip' place='bottom'>
                                                {tooltipContent}
                                            </Tooltip>
                                            <img id="twitter" src={twitter} alt="twitter icon" className="cursor-pointer" />
                                            <Tooltip anchorSelect="#twitter" className='!tooltip' place='bottom'>
                                                search on twitter
                                            </Tooltip>
                                            <img id='share' src={share} alt='share' className='cursor-pointer' />
                                            <Tooltip anchorSelect="#share" className='!tooltip' place='bottom' clickable openOnClick>
                                                share
                                                <div className='flex py-1  border-b border-white/15 cursor-pointer'>
                                                    <img src={twitter_simple} />
                                                    <img src={telegram} />
                                                    <img src={black_white} />
                                                </div>
                                                <div className='flex flex-col py-1'>
                                                    <div className='flex gap-1'>
                                                        <p id='CA' className='text-[11px] text-[#C3C6CC] font-medium'>CA: 0x7e...9F27</p>
                                                        <img id="copy" onClick={()=>handleCopy("CA: Ox7egh43kmo9p1w8je9f27")} src={file_copy} alt="Copy icon" className="cursor-pointer" />
                                                        <Tooltip anchorSelect="#copy" className='!tooltip' place='bottom'>
                                                            {tooltipContent}
                                                        </Tooltip>
                                                    </div>
                                                    <div className='flex gap-1'>
                                                        <p id='url' className='text-[11px] text-[#C3C6CC] font-medium'>Url: https://flau..
                                                            <Tooltip anchorSelect="#url" className='!tooltip' place='bottom'>
                                                            Url: https://flaunch.gg/base/coin/0xa3f9b7416c43390c51bea7374c079c6c04efc563
                                                            </Tooltip>
                                                        </p>

                                                        <img id="copy-url" onClick={()=>handleCopy("Url: https://flaunch.gg/base/coin/0xa3f9b7416c43390c51bea7374c079c6c04efc563")} src={file_copy} alt="Copy icon" className="cursor-pointer" />
                                                        <Tooltip anchorSelect="#copy-url" className='!tooltip' place='bottom'>
                                                            {tooltipContent}
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </Tooltip>

                                        </div>
                                        <div className='flex text-center items-center gap-1'>
                                            <div id='volume' className=' cursor-pointer bg-[rgba(252,191,4,0.12)] gap-[2px] leading-4 py-[2px] flex px-2 rounded-[8px] text-[10px] font-medium text-[#FCBF04]'> <img src={group} className='' />138
                                                <Tooltip anchorSelect="#volume" className='!tooltip' place='bottom'>
                                                    12.5K
                                                </Tooltip>
                                            </div>
                                            <div id='prev-graduations' className=' cursor-pointer bg-[rgba(252,191,4,0.12)] gap-[2px] leading-4 py-[2px] flex px-2 rounded-[8px] text-[10px] font-medium text-[#FCBF04]'> <img src={contacts_book} className='' />1000.49
                                                <Tooltip anchorSelect="#prev-graduations" className='!tooltip' place='bottom'>
                                                    1000
                                                </Tooltip>
                                            </div>
                                            <div id='total-holders' className=' cursor-pointer bg-[rgba(252,191,4,0.12)] gap-[2px] leading-4 py-[2px] flex px-2 rounded-[8px] text-[10px] font-medium text-[#FCBF04]'> <img src={wallet} className='' />12
                                                <Tooltip anchorSelect="#total-holders" className='!tooltip' place='bottom'>
                                                    Total holders
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end text-[11px] font-medium'>
                                        <div className='w-[114px] border-b border-white/15 pb-1 '>
                                            <div id='market-cap' className='cursor-pointer flex items-center justify-end gap-[4px]'>
                                                <span className='text-white leading-1'>MC:</span>
                                                <span className='text-[#7FE76F]'>$680K</span>
                                                <img src={up_green} alt="Up" className='w-[10px] h-[10px]' />
                                                <Tooltip anchorSelect="#market-cap" className='!tooltip' place='right'>
                                                    market-cap
                                                </Tooltip>
                                            </div>
                                            <div id='vol-real' className=' cursor-pointer flex items-center justify-end gap-[4px]'>
                                                <span className='text-white leading-1'>Vol:</span>
                                                <span className='text-[#F68989]'>$680K</span>
                                                <img src={down_red} alt="Down" className='w-[10px] h-[10px]' />
                                                <Tooltip anchorSelect="#vol-real" className='!tooltip' place='right'>
                                                    Volume
                                                </Tooltip>
                                            </div>
                                        </div>
                                        <div className='pt-1'>
                                            <div className='flex items-center justify-end gap-[4px]'>
                                                <span className='text-white leading-1'>5min vol:</span>
                                                <span className='text-[#7FE76F]'>10%</span>
                                                <img src={up_green} alt="Up" className='w-[10px] h-[10px]' />
                                            </div>
                                            <div className='flex items-center justify-end gap-[4px]'>
                                                <span className='text-white leading-1'>5min price:</span>
                                                <span className='text-[#F68989]'>2.4%</span>
                                                <img src={down_red} alt="Down" className='w-[10px] h-[10px]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between text-center gap-12'>
                                    <div className='flex text-center items-center gap-1'>
                                        <div id='top-hold' className='bg-[rgba(17,139,232,0.12)] cursor-pointer gap-[2px] leading-4 py-[2px] flex px-[6px] rounded-[8px] text-[10px] font-medium text-[#59B0F3]'> <img src={usersettings} />10%
                                            <Tooltip anchorSelect="#top-hold" className='!tooltip' place='bottom'>
                                                Top 10 hold <span>20.04%</span>
                                            </Tooltip>
                                        </div>
                                        <div id='dev-hold' className='bg-[rgba(17,139,232,0.12)] cursor-pointer gap-[2px] leading-4 py-[2px] flex px-[6px] rounded-[8px] text-[10px] font-medium text-[#59B0F3]'> <img src={aliens} />0.15%
                                            <Tooltip anchorSelect="#dev-hold" className='!tooltip' place='bottom'>
                                                Dev hold <span>20.04%</span>
                                            </Tooltip>
                                        </div>
                                        <div id='NOsniper' className='bg-[rgba(17,139,232,0.12)] cursor-pointer gap-[2px] leading-4 py-[2px] flex px-[6px] rounded-[8px] text-[10px] font-medium text-[#59B0F3]'> <img src={focus_3} />3
                                            <Tooltip anchorSelect="#NOsniper" className='!tooltip' place='bottom'>
                                                Number of sniper
                                            </Tooltip>
                                        </div>
                                        <div id='bundle-hold' className='bg-[rgba(17,139,232,0.12)] cursor-pointer gap-[2px] leading-4 py-[2px] flex px-[6px] rounded-[8px] text-[10px] font-medium text-[#59B0F3]'> <img src={stack} />2%
                                            <Tooltip anchorSelect="#bundle-hold" className='!tooltip' place='bottom'>
                                                Bundle hold <span>20.04%</span>
                                            </Tooltip>
                                        </div>
                                        <div id='bot-trader' className='bg-[rgba(17,139,232,0.12)] cursor-pointer gap-[2px] leading-4 py-[2px] flex px-[6px] rounded-[8px] text-[10px] font-medium text-[#59B0F3]'> <img src={robot} />9
                                            <Tooltip anchorSelect="#bot-trader" className='!tooltip' place='bottom'>
                                                Bot traders: <span>Bullx, trojin, photon</span>
                                            </Tooltip>
                                        </div>
                                        <div id='bride-amount' className='bg-[rgba(17,139,232,0.12)] cursor-pointer gap-[2px] leading-4 py-[2px] flex px-[6px] rounded-[8px] text-[10px] font-medium text-[#59B0F3]'> <img src={hand_coin} />2.5$
                                            <Tooltip anchorSelect="#bride-amount" className='!tooltip' place='bottom'>
                                                Bribe amount <span>2.4$</span>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div id='buy' className='flex items-center justify-center bg-[#2D2D2D] rounded-[6px] pl-[6px] pr-2 py-[1px] hover:bg-[#7FE76F]' ><img src={flash} className='size-[14px]' /><p className='text-[#7FE76F] hover:text-black text-[11px] font-semibold'>Buy</p>
                                        <Tooltip anchorSelect="#buy" className='!tooltip' place='bottom'>
                                            Flash buy
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default PlaygroundSection
