'use client'
import React , {useState,useEffect} from 'react'
import ChatComp from '../Components/ChatComp'
import "../Styles/Recycle.css"
import Uploader from '../Components/Uploader'
import APIService from '../Apis/APIService'
import { CircularProgress } from "@mui/material";
import Container from 'react-bootstrap/Container';
import battery from "../Images/battery.jpg"
import biological from "../Images/biological.jpg"
import brownglass from "../Images/brown-glass.jpg"
import cardboard from "../Images/cardboard.jpg"
import clothes from "../Images/clothes.jpg"
import greenglass from "../Images/green-glass.jpg"
import metal from "../Images/metal.jpg"
import paper from "../Images/paper.jpg"
import plastic from "../Images/plastic.jpg"
import shoes from "../Images/shoes.jpg"
import trash from "../Images/trash.jpg"
import whiteglass from "../Images/white-glass.jpg"
import battery1 from "../Images/battery1.jpg"
import battery2 from "../Images/battery2.jpg"
import battery3 from "../Images/battery3.jpg"
import battery4 from "../Images/battery4.jpg"
import battery5 from "../Images/battery5.jpg"
import bio1 from "../Images/bio1.jpg"
import bio2 from "../Images/bio2.jpg"
import bio3 from "../Images/bio3.jpg"
import bio4 from "../Images/bio4.jpg"
import bio5 from "../Images/bio5.jpg"
import br1 from "../Images/br1.jpg"
import br2 from "../Images/br2.jpg"
import br3 from "../Images/br3.jpg"
import br4 from "../Images/br4.jpg"
import br5 from "../Images/br5.jpg"
import cardboard1 from "../Images/cardboard1.jpg"
import cardboard2 from "../Images/cardboard2.jpg"
import cardboard3 from "../Images/cardboard3.jpg"
import cardboard4 from "../Images/cardboard4.jpg"
import cardboard5 from "../Images/cardboard5.jpg"
import clothes1 from "../Images/clothes1.jpg"
import clothes2 from "../Images/clothes2.jpg"
import clothes3 from "../Images/clothes3.jpg"
import clothes4 from "../Images/clothes4.jpg"
import clothes5 from "../Images/clothes5.jpg"
import gr1 from "../Images/gr1.jpg"
import gr2 from "../Images/gr2.jpg"
import gr3 from "../Images/gr3.jpg"
import gr4 from "../Images/gr4.jpg"
import gr5 from "../Images/gr5.jpg"
import metal1 from "../Images/metal1.jpg"
import metal2 from "../Images/metal2.jpg"
import metal3 from "../Images/metal3.jpg"
import metal4 from "../Images/metal4.jpg"
import metal5 from "../Images/metal5.jpg"
import paper1 from "../Images/paper1.jpg"
import paper2 from "../Images/paper2.jpg"
import paper3 from "../Images/paper3.jpg"
import paper4 from "../Images/paper4.jpg"
import paper5 from "../Images/paper5.jpg"
import plastic1 from "../Images/plastic1.jpg"
import plastic2 from "../Images/plastic2.jpg"
import plastic3 from "../Images/plastic3.jpg"
import plastic4 from "../Images/plastic4.jpg"
import plastic5 from "../Images/plastic5.jpg"
import resgeneral from "../Images/resgeneral.jpg"
import shoes1 from "../Images/shoes1.jpg"
import shoes2 from "../Images/shoes2.jpg"
import shoes3 from "../Images/shoes3.jpg"
import shoes4 from "../Images/shoes4.jpg"
import shoes5 from "../Images/shoes5.jpg"
import trash1 from "../Images/trash1.jpg"
import trash2 from "../Images/trash2.jpg"
import trash3 from "../Images/trash3.jpg"
import trash4 from "../Images/trash4.jpg"
import trash5 from "../Images/trash5.jpg"
import wt1 from "../Images/wt1.jpg"
import wt2 from "../Images/wt2.jpg"
import wt3 from "../Images/wt3.jpg"
import wt4 from "../Images/wt4.jpg"
import wt5 from "../Images/wt5.jpg"
// import { useTranslation } from "react-i18next";
import {useTranslations} from 'next-intl';
import Image from 'next/image';
const images = [
    battery,
    biological,
    brownglass,
    cardboard,
    clothes,
    greenglass,
    metal,
    paper,
    plastic,
    shoes,
    trash,
    whiteglass
]
const Resimages = [
    [battery1,battery2,battery3,battery4,battery5],
    [bio1,bio2,bio3,bio4,bio5],
    [br1,br2,br3,br4,br5],
    [cardboard1,cardboard2,cardboard3,cardboard4,cardboard5],
    [clothes1,clothes2,clothes3,clothes4,clothes5],
    [gr1,gr2,gr3,gr4,gr5],
    [metal1,metal2,metal3,metal4,metal5],
    [paper1,paper2,paper3,paper4,paper5],
    [plastic1,plastic2,plastic3,plastic4,plastic5],
    [shoes1,shoes2,shoes3,shoes4,shoes5],
    [trash1,trash2,trash3,trash4,trash5],
    [wt1,wt2,wt3,wt4,wt5]
]




const Recycle = () => {
    // const [img,setImg] = useState([]);
    const [output, setoutput] = useState("");
    const [waiting, setWaiting] = useState(false);
    const [question,setquestion] = useState("what to do with plastic garbage")
    const [showIndex,setShowIndex] = useState(0)
    const [img,setimg] = useState(null);
    const t = useTranslations();

    const guidelines =  t("There_are_several_ways_to_find_information_about_recycling_in_your_area:_Your_local_waste_collection_provider's_website:_They_will_usually_have_a_detailed_list_of_accepted_recyclables_and_any_specific_instructions._Earth911_(https://earth911.com/)_is_a_comprehensive_search_engine_for_recycling_information_by_location._Your_municipality's_website:_They_might_have_a_dedicated_section_for_recycling_guidelines_and_drop-off_locations.");

   const Infos = [
    {
        title: t("Batteries"),
        Whatare: t("Batteries_are_portable_electrochemical_devices_that_convert_chemical_energy_into_electrical_energy_They_come_in_various_sizes_and_shapes_powering_everything_from_tiny_watches_to_large_cars_A_typical_battery_consists_of_an_anode_negative_electrode_a_cathode_positive_electrode_and_an_electrolyte_that_facilitates_the_flow_of_ions_between_them_Chemical_reactions_within_the_battery_generate_the_electricity_we_use"),
        accepted: t("No_batteries_are_not_typically_accepted_in_curbside_recycling_programs_due_to_the_hazardous_materials_they_contain_Lithium_ion_batteries_for_example_can_cause_fires_if_damaged_during_collection_or_processing"),
        clean: t("Batteries_dont_require_any_specific_cleaning_before_disposal_However_its_important_to_remove_any_residue_or_corrosion_from_the_battery_terminals_to_avoid_potential_hazards_during_handling"),
        instructions: t("Batteries_dont_require_any_specific_cleaning_before_disposal_However_its_important_to_remove_any_residue_or_corrosion_from_the_battery_terminals_to_avoid_potential_hazards_during_handling_Are_there_any_special_instructions_for_recycling_batteries_Absolutely_Batteries_should_never_be_thrown_in_the_trash_Here_are_some_proper_disposal_methods_for_different_battery_types_Household_Batteries_AAA_AA_C_D_9V_Many_retailers_that_sell_batteries_offer_take_back_programs_You_can_also_find_battery_collection_bins_at_designated_drop_off_locations_like_electronics_stores_hazardous_waste_facilities_or_community_centers_Lithium_ion_Batteries_from_electronics_These_require_special_handling_due_to_their_potential_fire_risk_Check_with_your_local_electronics_waste_recycler_or_manufacturer_for_specific_instructions_Car_Batteries_Most_auto_parts_stores_will_accept_old_car_batteries_for_recycling_when_you_purchase_a_new_one"),
        recycled: t("The_types_of_recyclables_accepted_in_your_curbside_program_can_vary_depending_on_your_location_Here_are_some_commonly_accepted_recyclables_Paper_cardboard_newspapers_magazines_office_paper_Plastic_bottles_and_containers_check_for_recycling_symbols_and_local_guidelines_Metal_cans_aluminum_steel_Glass_bottles_and_jars")
    },
    {
        title: t("Biological"),
        Whatare: t("Biological_waste_also_known_as_organic_waste_refers_to_any_material_derived_from_living_organisms_This_encompasses_a_wide_range_of_items_including_Food_scraps_Uneaten_food_fruit_and_vegetable_peels_eggshells_coffee_grounds_tea_bags_Yard_waste_Leaves_grass_clippings_branches_twigs_and_garden_trimmings_Paper_products_Food_soiled_paper_towels_napkins_pizza_boxes_depending_on_local_guidelines_Wood_products_Untreated_wood_scraps_cardboard_contaminated_with_food"),
        accepted: t("It_depends_on_your_local_program_Many_communities_offer_curbside_collection_for_food_scraps_and_yard_waste_through_composting_programs_However_some_may_require_separate_bins_or_collection_methods_Its_always_best_to_check_with_your_local_waste_collection_provider_for_specific_guidelines"),
        clean: t("For_composting_programs_its_best_to_remove_any_excess_packaging_materials_like_plastic_bags_or_liners_However_a_light_rinse_of_food_scraps_is_generally_not_necessary_Composting_facilities_are_designed_to_handle_organic_materials_and_break_them_down_naturally"),
        instructions: t("Here_are_some_things_to_keep_in_mind_when_recycling_biological_waste_Composting_Avoid_putting_in_meat_scraps_dairy_products_or_oily_food_waste_as_these_can_attract_pests_and_disrupt_the_composting_process_Yard_waste_Remove_any_branches_or_twigs_exceeding_the_size_limit_set_by_your_program_Some_programs_might_also_exclude_yard_waste_treated_with_pesticides_or_herbicides"),
        recycled: t("In_addition_to_biological_waste_many_communities_offer_recycling_programs_for_Paper_cardboard_newspapers_magazines_office_paper_Plastic_bottles_and_containers_check_for_recycling_symbols_and_local_guidelines_Metal_cans_aluminum_steel_Glass_bottles_and_jars")
    },
    {
        title: t("Brown_Glass"),
        Whatare: t("Brown_glass_also_known_as_amber_glass_is_a_type_of_colored_glass_commonly_used_for_food_and_beverage_containers_The_brown_hue_comes_from_adding_small_amounts_of_iron_sulfur"),
        accepted: t("Yes_brown_glass_is_generally_accepted_in_curbside_recycling_programs_In_fact_separating_glass_colors_is_important_for_the_recycling_process_Brown_glass_is_often_used_for_beer_bottles_wine_bottles_and_some_food_containers"),
        clean: t("Rinse_the_container_Simply_remove_any_leftover_food_or_beverage_residue_with_a_quick_rinse_Dont_use_harsh_soaps_or_detergents_as_these_can_contaminate_the_recycling_stream_Remove_lids_and_labels_Most_curbside_programs_require_lids_and_labels_to_be_removed_before_recycling_Check_with_your_local_provider_for_specific_instructions"),
        instructions: t("Here_are_some_things_to_keep_in_mind_when_recycling_brown_glass_Leave_the_cap_off_Recycle_glass_containers_without_their_lids_or_caps_These_are_usually_made_of_different_materials_and_should_be_recycled_separately_check_your_local_guidelines_Dont_bag_your_glass_Place_loose_glass_containers_directly_in_your_recycling_bin_Bagging_glass_can_contaminate_the_recycling_stream_and_hinder_the_sorting_process_Check_for_cracks_or_breaks_Most_programs_accept_broken_glass_as_long_as_the_pieces_are_large_enough_to_handle_safely_However_some_might_have_specific_requirements"),
        recycled: t("Besides_brown_glass_many_communities_accept_other_colored_glass_for_recycling_such_as_Clear_glass_Often_used_for_food_containers_beverage_bottles_and_jars_Green_glass_Commonly_used_for_wine_bottles_and_some_beverage_containers")
    },
    {
        title: t("CardBoard"),
        Whatare: t("Cardboard_is_a_thick_stiff_paperboard_material_commonly_used_for_making_boxes_packaging_materials_and_even_some_furniture_components_It_consists_of_multiple_layers_of_fluted_paper_creating_a_strong_and_lightweight_structure"),
        accepted: t("Absolutely_Cardboard_is_one_of_the_most_recycled_paper_products_Around_70_percent_of_all_cardboard_in_the_United_States_is_recovered_for_recycling_making_it_a_valuable_resource"),
        clean: "",
        instructions: t("For_most_curbside_programs_extensive_cleaning_isnt_necessary_Heres_what_you_should_do_Remove_any_excess_packaging_materials_If_your_cardboard_box_has_plastic_strapping_or_packing_tape_remove_it_before_placing_it_in_the_recycling_bin_These_materials_often_need_to_be_recycled_separately_Scrape_off_excessive_food_residue_For_cardboard_containers_that_held_food_scrape_off_any_large_chunks_or_residue_that_could_attract_pests_or_contaminate_the_recycling_stream_Dont_worry_about_minor_stains_A_light_oil_stain_or_a_few_drops_of_liquid_wont_usually_disqualify_cardboard_from_recycling_Most_programs_can_handle_minimal_contamination"),
        recycled: t("Here_are_some_key_things_to_remember_Flatten_the_cardboard_Break_down_cardboard_boxes_by_flattening_them_This_saves_space_in_your_recycling_bin_and_allows_for_more_efficient_processing_at_recycling_facilities_Cut_up_large_pieces_If_you_have_very_large_cardboard_pieces_consider_cutting_them_down_to_a_manageable_size_that_fits_comfortably_in_your_bin_Check_for_local_guidelines_While_most_programs_accept_cardboard_some_might_have_specific_requirements_Its_always_best_to_check_with_your_local_waste_collection_provider_for_any_special_instructions")
    },
    
    {
        title:t("Cloathes"),
        Whatare: t("Clothes_come_in_a_wide_variety_of_materials,_both_natural_and_synthetic._Here_are_some_common_examples:_Natural_fibers:_Cotton,_wool,_linen,_hemp,_silk_Synthetic_fibers:_Polyester,_nylon,_acrylic,_spandex_The_type_of_material_will_influence_how_clothes_can_be_recycled_or_reused."),
        accepted : t("No,_clothes_are_not_typically_accepted_in_curbside_recycling_programs._The_sorting_and_processing_of_textiles_for_recycling_is_a_complex_process_not_yet_widely_integrated_into_curbside_collection."),
        clean: t("Sort_through_your_clothes:_Separate_clothes_that_are_still_in_good_condition_from_those_that_are_ripped,_stained,_or_heavily_worn._Wash_and_mend_clothes_for_donation:_Give_your_clothes_a_fresh_start_by_washing_them_and_repairing_any_minor_tears_or_rips._This_makes_them_more_appealing_to_potential_recipients."),
        instructions : t("Some_charities_or_thrift_stores_might_have_specific_requirements_regarding_the_type_or_condition_of_clothes_they_accept._Here's_how_you_can_find_out:_Contact_your_chosen_donation_organization:_Reach_out_to_the_charity,_thrift_store,_or_shelter_you_plan_to_donate_to_and_inquire_about_their_specific_clothing_donation_guidelines._They_might_have_a_website_with_information_or_a_phone_number_you_can_call._Check_their_website:_Many_organizations_have_information_about_clothing_donations_on_their_websites._This_could_include_details_on_what_types_of_clothes_they_accept,_any_limitations_on_condition,_and_preferred_drop-off_procedures."),
        recycled :t("In_addition_to_clothes_donation,_here_are_other_recyclable_items_you_can_look_into_for_your_website:_Paper_products:_Cardboard_(already_covered),_newspaper,_magazines,_office_paper,_shredded_paper_(in_some_programs,_check_locally)._Plastic_bottles_and_containers:_Check_for_recycling_symbols_and_local_guidelines,_as_not_all_plastics_are_accepted_everywhere._Common_recyclables_include_soda_bottles,_water_bottles,_detergent_bottles,_and_rinsed_juice_containers._Metal_cans:_Aluminum_cans_(soda,_beer),_steel_food_cans_(soup,_vegetables),_and_clean_aluminum_foil_are_generally_accepted."),
    },
    {
        title:t("Green_Glass"),
        Whatare: t("Green_glass_is_a_type_of_colored_glass_commonly_used_for_food_and_beverage_containers._The_green_hue_comes_from_adding_small_amounts_of_metal_oxides,_such_as_chromium,_iron,_or_copper,_during_the_manufacturing_process._This_not_only_gives_the_glass_its_distinctive_color_but_also_helps_protect_the_contents_from_light_exposure."),
        accepted : t("Yes,_green_glass_is_generally_accepted_in_curbside_recycling_programs!_In_fact,_separating_glass_colors_is_important_for_the_recycling_process._Green_glass_is_often_used_for_wine_bottles,_beer_bottles,_and_some_food_containers."),
        clean: t("Rinse_the_container:_Simply_remove_any_leftover_food_or_beverage_residue_with_a_quick_rinse._Don't_use_harsh_soaps_or_detergents,_as_these_can_contaminate_the_recycling_stream._Remove_lids_and_labels:_Most_curbside_programs_require_lids_and_labels_to_be_removed_before_recycling._Check_with_your_local_provider_for_specific_instructions."),
        instructions :t("Here_are_some_things_to_keep_in_mind_when_recycling_green_glass:_Leave_the_cap_off:_Recycle_glass_containers_without_their_lids_or_caps._These_are_usually_made_of_different_materials_and_should_be_recycled_separately_(check_your_local_guidelines)._Don't_bag_your_glass:_Place_loose_glass_containers_directly_in_your_recycling_bin._Bagging_glass_can_contaminate_the_recycling_stream_and_hinder_the_sorting_process._Check_for_cracks_or_breaks:_Most_programs_accept_broken_glass_as_long_as_the_pieces_are_large_enough_to_handle_safely._However,_some_might_have_specific_requirements."),
        recycled :t("Besides_green_glass,_many_communities_accept_other_colored_glass_for_recycling,_such_as:_Clear_glass:_Often_used_for_food_containers,_beverage_bottles,_and_jars._Brown_glass:_Commonly_used_for_beer_bottles,_wine_bottles,_and_some_food_containers."),
    },
    {
        title:t("Metal"),
        Whatare: t("Many_everyday_metal_objects_can_be_recycled,_including:_Aluminum_cans:_Soda_cans,_beer_cans,_and_other_aluminum_beverage_containers._Steel_food_cans:_Cans_for_soups,_vegetables,_fruits,_and_other_canned_goods._Clean_aluminum_foil:_Used_aluminum_foil_used_for_cooking_or_wrapping_food._Metal_lids_and_caps:_Lids_from_food_jars,_bottle_caps,_and_pot/pan_lids_(check_your_local_program's_guidelines)._Appliance_scrap_metal:_Pieces_of_metal_from_old_appliances_like_washers,_dryers,_or_refrigerators_(may_require_specific_drop-off_locations)._Clean_cookware:_Pots,_pans,_and_baking_sheets_made_of_metal_(check_your_local_program's_guidelines)."),
        accepted : t("Yes,_metal_is_widely_accepted_in_curbside_recycling_programs!_Due_to_its_high_value_and_ease_of_sorting,_metal_recycling_is_a_well-established_practice."),
        clean: t("Rinse_any_containers:_For_food_or_beverage_cans,_give_them_a_quick_rinse_to_remove_any_leftover_residue._Remove_any_plastic_or_non-metal_parts:_Some_lids_or_attachments_might_be_made_of_plastic_or_other_materials._Separate_these_before_placing_the_metal_in_the_recycling_bin."),
        instructions : t("Here_are_some_key_things_to_remember:_Check_your_local_program's_guidelines:_While_most_programs_accept_common_metal_items,_there_might_be_slight_variations._It's_always_best_to_consult_your_local_waste_collection_provider's_website_for_specific_instructions._Don't_crush_cans_(optional):_Crushing_aluminum_cans_can_save_space_in_your_bin,_but_it's_not_always_necessary._Modern_recycling_facilities_can_handle_both_crushed_and_uncrushed_cans._Empty_aerosol_cans:_Make_sure_to_completely_empty_aerosol_cans_before_placing_them_in_the_recycling_bin._Puncturing_them_is_not_recommended_for_safety_reasons."),
        recycled :t("Metal_recycling_offers_several_environmental_and_economic_advantages:_Conserves_resources:_Recycled_metal_reduces_the_need_to_extract_virgin_materials_from_the_earth,_preserving_natural_resources._Saves_energy:_Recycling_metal_requires_less_energy_compared_to_producing_new_metal_from_scratch._Reduces_landfill_waste:_Metal_doesn't_decompose_in_landfills,_so_recycling_diverts_it_from_landfills_and_conserves_space."),
    },
    
    {
        title:t("Plastic"),
        Whatare: t("Plastic_refers_to_a_wide_range_of_synthetic_or_semi-synthetic_materials._The_key_property_of_plastic_is_its_plasticity,_which_allows_it_to_be_molded_and_shaped_into_various_forms._There_are_many_different_types_of_plastics,_each_with_its_own_properties_and_recycling_potential."),
        accepted : t("Not_all_plastics_are_created_equal,_and_what_gets_accepted_in_your_curbside_recycling_program_depends_on_your_local_facilities._Generally,_rigid_plastics_with_recycling_codes_1_and_2_(usually_PET_and_HDPE)_are_widely_accepted._However,_some_locations_might_accept_other_types_of_plastics."),
        clean: t("Most_recycling_programs_require_that_plastics_are_rinsed_clean_of_any_food_or_liquid_residue._You_don't_need_to_get_them_squeaky_clean,_but_any_major_leftover_materials_can_contaminate_the_recycling_stream."),
        instructions : t("Here_are_some_general_tips_for_recycling_plastic:_Check_the_recycling_code:_Most_plastic_containers_have_a_recycling_symbol_with_a_number_inside_(usually_located_on_the_bottom)._This_code_indicates_the_type_of_plastic_and_helps_sorting_facilities_determine_if_it's_accepted_in_your_program._Leave_lids_on:_Contrary_to_popular_belief,_some_recycling_programs_now_accept_lids_with_plastic_bottles._Check_your_local_guidelines._Don't_bag_your_recyclables:_Plastic_bags_can_tangle_equipment_at_recycling_facilities._Place_loose_plastic_items_directly_in_the_recycling_bin._Rinse,_but_don't_overdo_it:_A_quick_rinse_to_remove_food_or_beverage_residue_is_sufficient._When_in_doubt,_throw_it_out:_If_you're_unsure_whether_a_plastic_item_is_recyclable_in_your_area,_err_on_the_side_of_caution_and_toss_it_in_the_trash."),
        recycled :t("What_gets_recycled_varies_by_location._Your_local_municipality_or_waste_disposal_provider_should_have_a_recycling_guide_that_details_what_materials_are_accepted_in_your_curbside_program._This_might_include_paper,_cardboard,_metal_cans,_glass_bottles,_and_certain_types_of_plastics.")
    },
    {
        title:t("Shoes"),
        Whatare: t("Shoes_themselves_are_not_considered_'garbage'_in_the_traditional_sense,_but_rather_unwanted_items."),
        accepted : t("No,_shoes_are_generally_not_accepted_in_curbside_recycling_programs._This_is_because_shoes_are_made_from_a_combination_of_materials_like_leather,_fabric,_rubber,_and_glue,_which_makes_them_difficult_and_expensive_to_sort_and_reprocess_in_most_recycling_facilities."),
        clean: t("Lightly_soiled_shoes:_Wipe_away_dirt_and_dust_with_a_damp_cloth._More_soiled_shoes:_You_can_try_a_gentle_hand_wash_with_warm_water_and_laundry_detergent._Let_them_air_dry_completely_before_donation._Deodorize:_If_shoes_have_any_lingering_odors,_sprinkle_baking_soda_inside_and_let_them_sit_for_a_few_hours_before_brushing_it_out."),
        instructions : t("Condition:_Gently_used_shoes_in_good_condition_are_most_desirable._Shoes_with_rips,_tears,_or_broken_soles_might_not_be_accepted._Pairs:_Ideally,_donate_shoes_as_a_matched_pair._Donation_Centers:_Some_donation_centers_might_have_specific_requirements_or_limitations_on_the_types_of_shoes_they_accept_(e.g.,_only_athletic_shoes,_only_dress_shoes)._Check_their_website_or_call_beforehand."),
        recycled :t("In_addition_to_shoes_donation,_here_are_other_recyclable_items_you_can_look_into_for_your_website:_Paper_products:_Cardboard_(already_covered),_newspaper,_magazines,_office_paper,_shredded_paper_(in_some_programs,_check_locally)._Plastic_bottles_and_containers:_Check_for_recycling_symbols_and_local_guidelines,_as_not_all_plastics_are_accepted_everywhere._Common_recyclables_include_soda_bottles,_water_bottles,_detergent_bottles,_and_rinsed_juice_containers._Metal_cans:_Aluminum_cans_(soda,_beer),_steel_food_cans_(soup,_vegetables),_and_clean_aluminum_foil_are_generally_accepted.")
    },
    {
        title:t("Trash"),
        Whatare: t("Trash_refers_to_anything_you_throw_away_that_isn't_being_recycled_or_composted._It_can_include:_Food_scraps_(unless_composted)_Dirty_or_greasy_recyclables_(like_pizza_boxes)_Hazardous_waste_(batteries,_paint,_etc.)_Yard_waste_(leaves,_twigs,_etc.)_Electronic_waste_(e-waste)_Non-recyclable_plastics_(straws,_plastic_bags,_etc.)"),
        accepted : t("Generally,_trash_isn't_accepted_in_curbside_recycling_programs._There_might_be_exceptions_for_some_communities_with_advanced_sorting_facilities,_but_it's_always_best_to_check_with_your_local_guidelines."),
        clean: t("Since_trash_doesn't_include_recyclables,_cleaning_instructions_wouldn't_apply_here._However,_if_you're_unsure_if_an_item_is_trash_or_recyclable,_you_can_check_for_recycling_symbols_and_clean_it_according_to_your_local_recommendations."),
        instructions : t("There_are_no_recycling_instructions_for_trash._Trash_needs_to_be_properly_disposed_of_in_designated_bins_to_avoid_littering_and_manage_waste_effectively._Some_communities_offer_composting_options_for_food_scraps,_which_diverts_them_from_landfills."),
        recycled :t("What_gets_recycled_varies_depending_on_your_location._Here_are_some_common_recyclables_to_check_with_your_local_guidelines:_Paper_(cardboard,_newspapers,_magazines)_Metal_cans_(food_and_beverage_cans)_Glass_bottles_and_jars_(check_for_colour_sorting_instructions)_Plastic_bottles_and_containers_(check_for_recycling_symbols_and_accepted_types)")
    },
    {
        title:t("White_Glass"),
        Whatare: t("White_glass_is_essentially_a_super_clear_version_of_regular_clear_glass._It's_made_through_the_same_process_but_with_significantly_reduced_iron_oxide,_resulting_in_superior_light_transmission_and_a_near-perfect_colorless_appearance."),
        accepted : t("The_good_news_is_that_white_glass_is_generally_accepted_in_curbside_recycling_programs!_However,_it's_always_best_to_check_with_your_local_recycling_guidelines._Some_areas_might_have_specific_requirements_for_color_sorting_or_limitations_on_glass_types."),
        clean:t("Before_recycling_white_glass,_rinse_it_clean_to_remove_any_food_or_beverage_residue._You_don't_need_to_remove_labels_as_most_recycling_facilities_can_sort_these_out_during_processing."),
        instructions :t("There_aren't_any_special_instructions_for_recycling_white_glass_compared_to_regular_clear_glass._Make_sure_it's_clean_and_follow_your_local_guidelines_regarding_sorting_colors_or_removing_lids."),
        recycled :t("Along_with_white_glass,_many_communities_accept_other_glass_items_in_their_recycling_programs._Here_are_some_common_examples:_Clear_glass_bottles_and_jars_(check_for_color_sorting_instructions_in_your_area)_Colored_glass_bottles_(depending_on_your_local_program)")
    }
    
    ]






    const handleSubmit = (image) => {
        setWaiting(true);
        APIService.recycle({"files":image})
          .then((response) => {
            setoutput(response["output"]);
            setWaiting(false);
            console.log(response)
            var prediction = Number(response["output"]);
            setShowIndex(prediction)
            
          })
          .catch((error) => console.log("error", error));
    //     setoutput("qsdqs");
    //    setWaiting(false);
      };
      const handleReset = () => {
      }
     const getBase64 = (file, cb) =>{
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
  return (
    <>
    
    {/* <div style={{width:"100%",textAlign:"center",marginTop:"25px",paddingLeft:50,paddingRight:50}}>
            The Model is out of service right now because of the deployement limitations, However the site will predict a random type for further review
        </div> */}
    <div className='d-flex justify-content-around errorContainer ' >
        
        <Uploader
        handleChange={(file) => {


            var fr = new FileReader();
              fr.onload = function () {
                const res =  btoa(fr.result)
                setimg(res)
                handleSubmit(res) 
                
              };
    
    
              fr.readAsBinaryString(file);

            

        //     getBase64(file, (result) => {
        //         setimg(result)
        //         handleSubmit(result) 
        //    });
        //   var fr = new FileReader();
        //   fr.onload = function () {
            
        //   };


        //   fr.readAsText(file);
        // const data = new FormData();
        // data.append('img', file);

       
        
        }}
        handleCancel={(file) => {}}
        name={"file"}
        types={["png","jpg"]}
      />
        
    </div>
    {output === "" && !waiting ? (
        <></>
      ) : (
        <>
          
          {waiting ? (
             <div
             className="d-flex flex-column justify-content-center align-items-center p-4"
             style={{ gap: "15px" }}
           >
             <CircularProgress />
             <span>{t("This may take some time, please be patient")}</span>
           </div>
          ) : (
            <div>
                <div style={{height:50}}></div>
                <div className='intro-title titlec'>
                    <span>{t("Garbage Analysing Results")}</span>
                </div>
                <div style={{height:50}}></div>

                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center crsv' >
                <div className='imgcont w-50' style={{zIndex:500}}>
                <div className="layer " style={{zIndex:500}}>
                    <Image className='img1 rescov' src={images[showIndex]} alt="" /> 
                </div>
                </div>
                <div className='desco1 w-50' style={{zIndex:500,marginLeft:"-70px"}}>
                <div className='descotitle' style={{marginTop:"-50px"}}>
                    <div className="effect-wrap">
                        <div>
                            <h1 className="effect-block">
                        <span>{t("This_Garbage_is")}</span>
                    </h1>
                    <h1 className="effect-block" id="another">
                        <span>{Infos[showIndex]["title"]}</span>
                    </h1>
                        </div>
                    </div>
                    </div>
                </div>
                </Container>
                
                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center' >
                <div className='imgcont w-50' >
                <div className="layer ">
                    <Image className='img1' src={Resimages[showIndex][0]} alt="" /> 
                </div>
                </div>
                <div className='desco1 w-50'>
                    <div className='descotitle'>
                    {t("What_did")} <span style={{color: "#178a9f"}}>{Infos[showIndex]["title"]}</span>{t("means")}  
                    </div>
                    <div className='descocontent'>
                        {Infos[showIndex]["Whatare"]}
                 </div>
                </div>
                </Container>

                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center'>
                <div className='desco1 w-50' style={{paddingRight:"2rem",paddingLeft:"0"}}>
                    <div className='descotitle'>
                    {t("Are")}  <span style={{color: "#178a9f"}}>{Infos[showIndex]["title"]} </span>
                    {t("generally")}    <span style={{color: "#578a25"}}>
                    {t("accepted")}    </span>{t("in_curbside_recycling")}  
                    </div>
                    <div className='descocontent'>
                    {Infos[showIndex]["accepted"]}
                    </div>
                </div>
                <div className='imgcont w-50' >
                <div className="layer2"></div>
                    <Image className='img2' src={Resimages[showIndex][1]} alt="" /> 
                </div>
                
            </Container>

            <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center' >
                <div className='imgcont w-50' >
                <div className="layer ">
                    <Image className='img1' src={Resimages[showIndex][2]} alt="" /> 
                </div>
                </div>
                <div className='desco1 w-50'>
                    <div className='descotitle'>
                    {t("How_should_I_clean_this")}   <span style={{color: "#178a9f"}}>{Infos[showIndex]["title"]}</span> 
                    {t("item_before_recycling")}
                  </div>
                    <div className='descocontent'>
                        {Infos[showIndex]["clean"]}
                 </div>
                </div>
                </Container>

                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center'>
                <div className='desco1 w-50' style={{paddingRight:"2rem",paddingLeft:"0"}}>
                    <div className='descotitle'>
                    {t("Are_there_any_special")}   <span style={{color: "#178a9f"}}>{t("instructions")} 
                    {t("for_recycling_this_type_of_garbage ")}</span> 
                    </div>
                    <div className='descocontent'>
                    {Infos[showIndex]["instructions"]}
                    </div>
                </div>
                <div className='imgcont w-50' >
                <div className="layer2"></div>
                    <Image className='img2' src={Resimages[showIndex][3]} alt="" /> 
                </div>
                
            </Container>

            <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center' >
                <div className='imgcont w-50' >
                <div className="layer ">
                    <Image className='img1' src={Resimages[showIndex][4]} alt="" /> 
                </div>
                </div>
                <div className='desco1 w-50'>
                    <div className='descotitle'>
                    {t("What_other_types_of_waste_can_be")}   <span style={{color: "#178a9f"}}>
                    {t("recycled")}   </span>{t("in_my_community")}  
                    </div>
                    <div className='descocontent'>
                        {Infos[showIndex]["recycled"]}
                 </div>
                </div>
                </Container>

                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center'>
                <div className='desco1 w-50' style={{paddingRight:"2rem",paddingLeft:"0"}}>
                    <div className='descotitle'>
                    {t("Where_can_I_find_more ")}      <span style={{color: "#178a9f"}}>{t("information")}   
                    </span>{t("about_recycling_guidelines_in_my_area")}   
                    </div>
                    <div className='descocontent'>
                    {guidelines}
                    </div>
                </div>
                <div className='imgcont w-50' >
                <div className="layer2"></div>
                    <Image className='img2' src={resgeneral} alt="" /> 
                </div>
                
            </Container>
                <div>
                    
                    <ChatComp>

                    </ChatComp>
                
            </div>
            </div>
           
          )}
        </>
      )}
    </>
    
  )
}

export default Recycle