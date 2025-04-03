'use client'
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/HomePage.css";
import { Button } from '@mui/material';
// import { BsArrowRight } from "react-icons/bs";
import introimg from "./Images/intro.jpg"
// import display1 from "./Images/planet.jfif";
import React from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GroupsIcon from '@mui/icons-material/Groups';
import CardShow from './Components/CardShow';
import lbb from "./Images/bb.png";
import TabsHolder from './Components/TabsHolder';
import CustomCard from './Components/CustomCard';
import event1 from "./Images/event1.jpg";
import event2 from "./Images/event2.jpg";
import event3 from "./Images/event3.jpg";
import bg from "./Images/bg.jpg";
// import { useTranslation } from "react-i18next";
import {useTranslations} from 'next-intl';
import Link from 'next/link'
import Image from "next/image";
import "./Styles/App.css"
function Home() {
    const t = useTranslations();

    return (
        <div className='bb' style={{gap:"50px"}}>

        <Container fluid="x"  className='relative w-full h-screen flex flex-col justify-center items-center intro-page' >
        <Image
        src={introimg}
        alt="Intro Background01"
        layout="fill"
        objectFit="cover"
        quality={100} // Optimized quality
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/60 shadow-overlay z-0"></div>
       <div className="z-10 text-center d-flex flex-column justify-content-center align-items-center">
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("Save The World")} </span>
            <div className='intro-title text-center'>
                <span style={{color:"white"}}>  {t("Recycle Your Garbage")}  </span>
            </div>
            <div className='w-75 text-center mb-4' style={{color:"white"}}>
             {t("Recycle_Right_can_be_your_one-stop_shop_for_all_things_recycling._We_offer_information_on_what_can_be_recycled,_how_to_recycle_properly,_and_the_benefits_of_recycling.")} 
            
            </div>
            
            <Link rel="prefetch"  href='/Recycle' >
                <Button variant='contained' className='intro-button'> {t("Recycle Now")} </Button>
            </Link>
            </div>
        </Container>

        <Container  className='d-flex flex-column justify-content-center align-items-center six-page text-center'>
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("So Much to do!")} </span>
            <div className='second-title text-center' style={{fontSize:"40px"}}>
                <span> {t("Different")}  <span style={{color:"var(--main)"}}>  {t("Benifits")}   </span>  {t("&")}   
                <span style={{color:"var(--main)"}}>  {t("Solutions")} </span> 
                 <span style={{color:"var(--main)"}}>  {t("To Discover")} .</span></span>
            </div>
            <div>
             {t("Dive_deeper_into_recycling!_Discover_surprising_eco-benefits,_explore_easy_solutions_at_home,_and_build_a_greener_future,_together,_one_step_at_a_time.")} 
            
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center h-100 w-100 mt-4' style={{gap:'15px'}}>
                <CardShow title= {t('Recycle')} text= {t('Recycling_is_now_easy,_you_can_recycle_up_to_12_different_types_of_garbages_from_your_home.')} link={"/Recycle"} icon={<RecyclingIcon style={{fontSize:"80px"}}></RecyclingIcon>}/>
                <CardShow title= {t('Assistant')} text= {t('You_are_still_struggling_in_finding_the_right_type_of_your_garbage?_use_the_Assistant_bot_to_help_you.')} link={"/Assistant"} icon={<SmartToyIcon style={{fontSize:"80px"}}></SmartToyIcon>}/>
                <CardShow title= {t('Industries')} text= {t('You_want_to_inherit_our_model_in_your_application_or_website?_You_can_contact_as_to_find_more.')} link={"/Industries"} icon={<PrecisionManufacturingIcon style={{fontSize:"80px"}}></PrecisionManufacturingIcon>}/>
                <CardShow title= {t('Contact')} text= {t('If_you_have_any_questions_or_suggestions,_you_can_talk_to_our_team_for_a_fast_replying_service.')} link={"/Contact"} icon={<GroupsIcon style={{fontSize:"80px"}}></GroupsIcon>}/>
            </div>
            
        </Container>
            
        <Container fluid="x" className='d-flex flex-row page-three'>
            <Image src={"/Images/planet.jpg"} alt=""  className='img-left' width={400} height={400}/>
            <div className='d-flex flex-column justify-content-start align-items-start p-5 text-start w-50 right-area' style={{gap:"25px"}}>
                <div className='second-title text-start w-100' style={{fontSize:"40px"}}>
                    <span> <span style={{color:"var(--main)"}}>  {t("Contact")}  </span>  {t("Us_with_your")}  
                    <span style={{color:"var(--main)"}}>  {t("Ideas")}  </span>  {t("&")}  <span style={{color:"var(--main)"}}> 
                     {t("Suggestions")} .</span></span>
                </div>
                <div>
                 {t("Got_recycling_ideas_brimming?_We_want_to_hear_them!_Share_your_thoughts_and_suggestions_to_help_us_create_a_more_sustainable_future,_together._Every_voice_counts_in_building_a_greener_world,_one_brilliant_idea_at_a_time._Let's_make_recycling_revolutionary!")} 
                
                </div>
                <Link rel="prefetch"  href={"/Contact"} >
                <Button variant='outlined' className='intro-button'> {t("Contact us")} </Button>
            </Link>
            </div>
        </Container>

        <Container className='d-flex flex-column justify-content-center align-items-center fifth-page'>
        
            <div className='d-flex flex-row justify-content-center align-items-center rgb' style={{gap:"50px"}}>
                <div className='d-flex flex-column justify-content-start align-items-end  second-page-start'>
                <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t("Our Mission!")} </span>
                        <div className='second-title text-end'>
                        <span>  {t("We've_a")} <span style={{color:"var(--main)"}}>   {t("Clear Objectives")} </span> 
                           {t("From_this")} <span style={{color:"var(--main)"}}> {t("Tools")} </span></span>
                    </div>
                    <div className='w-75 content text-end'>
                     {t("We're_on_a_mission_to_revolutionize_recycling_and_empower_you_to_make_a_lasting_impact._Our_user-friendly_tools_with_clear_objectives_guide_you_towards_effective_recycling_practices,_making_a_real_difference,_one_recycled_item_at_a_time.")} 
                    

                    </div>
                </div>

                <div className='d-flex flex-row justify-content-start align-items-center w-50' style={{gap:"35px"}}>
                <Image src={lbb} alt="" className='lbb-img'/>
                </div>
            </div>
        </Container>


        <Container>
        <div className='second-title text-end'>
                        <span> {t("What Can you")}  <span style={{color:"var(--main)"}}> 
                         {t("Classify")} 
                         </span></span>
                    </div>
            <TabsHolder></TabsHolder>
        </Container>
        

        <Container className='d-flex flex-column justify-content-center align-items-center'style={{gap:"15px"}}>
        <div className='second-title text-start w-100'>
                        <span> {t("Lastes")}  <span style={{color:"var(--main)"}}> 
                          {t("Events")} </span></span>
                    </div>
            <div className='d-flex flex-row justify-content-center align-items-center flex-wrap cdcont'style={{gap:"35px"}}>
            <CustomCard icon={<Image src={event1} alt=""  className='itemimg'/>} title= {t("Afforestation campaign")}  content= {t("Kasdi Merbah Ouargla")}  content1= {t('Planting approximately 50 shrubs at the three pole colleges and next to the university transportation bus stop.')} border={false} swap={true} link="https://www.facebook.com/FNTIC.ITI/posts/pfbid0L1WMSZQwGvHCXGJXtiqUej6bt6MHeWPTTEFkANt8PFXXwhBE1ixLVgWqAq6DpY2tl"></CustomCard>
            <CustomCard icon={<Image src={event2} alt=""  className='itemimg'/>} title= {t("Afforestation campaign")}  content= {t('Ouargla Tramway')} content1= {t('Planting some areas of the institutions lands with seedlings and trees to develop and improve the aesthetic appearance of the institution.')} border={false} swap={true} link="https://www.facebook.com/snabel99/posts/pfbid02nSbdDd868qnjzV8VqP2vATKbThCXh5yJwkRS9vnSSvYnBDTyRBe9XWzE9yRyeY5yl"></CustomCard>
            <CustomCard icon={<Image src={event3} alt=""  className='itemimg'/>} title= {t("Afforestation campaign")}  content= {t('Scout section')} content1= {t('A campaign to plant trees on the main street was also carried out, after which a meeting was held at the great Ramadan table of charity.')} border={false} swap={true} link="https://www.facebook.com/199412braim/posts/pfbid0F6aV92x312TYe8jwrqPTxRYxmAhVBuRF2qo91mXwxyofgTyapPxWovEqhYhtmSLvl"></CustomCard>

            </div>
        </Container>



        <Container fluid="x"  className='relative w-full h-screen flex flex-col justify-center items-center  intro-page' >
            {/* <Image
            src={bg}
            alt="Intro Background"
            layout="fill"
            objectFit="cover"
            quality={100} // Optimized quality
            className="z-0"
        /> */}
      <div className="absolute inset-0 bg-black/60 shadow-overlay z-0"></div>

      <div className="z-10 text-center d-flex flex-column justify-content-center align-items-center">
        <span style={{color:"var(--main)",fontWeight:"200",fontSize:"24px"}}> {t('Our Recycling Model')}</span>
            <div className='intro-title text-center'>
                <span style={{color:"white"}}> {t("We've Reached a Good Point")}  </span>
            </div>
            <div className='w-75 text-center mb-4' style={{color:"white"}}>
             {t("We've_reached_a_tipping_point_in_recycling!__Our_innovative_model,_trained_on_a_massive_dataset_of_over_2,000_images,_boasts_an_impressive_95%_accuracy_in_identifying_recyclable_materials._But_speed_is_key_–_and_our_model_delivers_lightning-fast_results,_empowering_you_to_make_informed_recycling_decisions_in_seconds.")}
            
            </div>
            </div>
            
        </Container>

        </div>
    );
}

export default Home