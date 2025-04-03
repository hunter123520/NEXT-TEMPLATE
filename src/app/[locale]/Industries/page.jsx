'use client'
import "bootstrap/dist/css/bootstrap.min.css";
//import Container from 'react-bootstrap/Container';
import Container from "react-bootstrap/Container";
import "../Styles/LearningPage.css";
import "../Styles/ContactPage.css";
import i18n from "../i18n";
// import { useTranslation } from "react-i18next";
import {useTranslations} from 'next-intl';
function Industries(){
    const t = useTranslations();
    return(
        <div className="" >
            <Container fluid="xxl" className="CPT1" style={{height:"125vh"}}>
                <div className="CPTTitle">
                    {t("The_Industries_Center")}
                
                <hr className="lineSt" />
                </div>
                <div className="CPTdesc" style={{width:"80%"}}>
                {t("we_offer_highly_trained_models_designed_to_effciently_classify_waste._Our_models_undergo_rigorous_training_processes,_starting_with_a_vast_dataset_comprising_over_14_million_images._This_initial_training_phase_ensures_that_our_models_are_equipped_with_a_broad_understanding_of_various_waste_materials._Following_this,_our_models_undergo_a_fine-tuning_process_on_a_smaller,_waste-specific_dataset,_honing_their_ability_to_accurately_classify_waste_items_with_precision_and_reliability._This_method_yields_excellent_results,_allowing_our_models_to_distinguish_between_different_types_of_waste_effectively._With_our_advanced_technology,_you_can_trust_our_models_to_optimize_waste_management_processes_and_contribute_to_a_more_sustainable_future.")} 

                </div>
                <div className="CPTdesc">
                {t("For_more_information_or_to_order_the_models,_please_contact_us_at_philippe.fernandez.2002@gmail.com.")}

                </div>
            </Container>
        </div>
    );
}

export default Industries;