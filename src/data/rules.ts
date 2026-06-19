export interface RuleSection {
	id: string;
	number: number;
	title: string;
	items: string[];
}

export const rulesMeta = {
	title: "Conduct Rules",
	subtitle: "Hillwood Body Corporate — SS 254/1994 — Erf 152120 Cape Town at Heathfield",
	issued: "June 2014",
};

export const ruleSections: RuleSection[] = [
	{
		id: "animals",
		number: 1,
		title: "Animals, Reptiles and Birds",
		items: [
			"An owner or occupant may not house or keep an animal in their section or unit or on any part of the common property unless they have first obtained the written consent of the Trustees of Hillwood or its Managing Agent.",
			"Owners who are selling or letting must arrange permission for their buyers or occupiers before concluding sales contracts or lease agreements.",
			"All pets are to wear a name tag indicating the pet's name, as well as the owner's contact details.",
			"Without exception, all cats and dogs must either be neutered or spayed. Proof of this is to be supplied to the Trustees of Hillwood or its Managing Agent for their records.",
			"No more than one small animal per section or unit will be allowed unless special permission is obtained by Hillwood Body Corporate or its Managing Agent prior to obtaining another pet.",
			"Should you wish to replace any animal (whether lost or deceased), permission must be obtained from the Trustees of Hillwood or its Managing Agent prior to obtaining the new animal. A new Pet Application Form must be completed and authorised before bringing the new animal into the complex.",
			"Dogs may not roam freely in and around the common property of Hillwood and must be attached to a leash whilst on the common property at all times. The pet owner or guardian will be held responsible for the removal and cleaning up of any excrement of the pet.",
			"Regular excrement disposal within the section or unit is also required so that this does not cause discomfort for direct neighbours. Excrement is to be picked up and flushed down the owner's toilet and not placed in the bins.",
			"Incessant barking or unacceptable noise disturbance by any animal will not be tolerated. Complaints will be recorded by the Body Corporate or its Managing Agent and kept on record.",
			"The animal owner will be held liable for any destruction or damage to another resident's property or Hillwood's common property, and all costs will be for the animal owner's account.",
			"Any complaints about offending animals must be submitted in writing to Hillwood Body Corporate or its Managing Agent for assessment. Guilty parties will be asked to remove their pet from Hillwood with immediate effect.",
			"If any of the above rules and conditions are breached, approval to keep the offending animal may be withdrawn at any time and action taken against the owner.",
			"The keeping and slaughtering of livestock is prohibited.",
		],
	},
	{
		id: "refuse",
		number: 2,
		title: "Refuse Disposal",
		items: [
			"An owner or occupier of a section shall maintain in a hygienic and dry condition a receptacle for refuse within their section or unit, their exclusive use area, or on such part of the common property as may be authorised by the trustees in writing.",
			"Before refuse is placed in such receptacle it must be securely wrapped, or in the case of tins or other containers, completely drained. All nappies and sanitary items must be double wrapped. No animal excrement may be thrown in the refuse bins.",
			"For the purpose of having refuse collected, place such receptacle within the area and at the times designated by the trustees.",
			"When the refuse has been collected, promptly return such receptacle to the section or other area referred to above.",
			"Refuse which is not collectable by the City of Cape Town is the responsibility of the individual owner or occupier, who must make their own arrangements for removal. This includes building materials, bricks, window frames, glass, car parts, redundant flower pots filled with soil, umbrellas, furniture and other large items.",
			"No rubbish or refuse may be left outside the refuse area, on top of refuse bins, or on the common property.",
			"All workmen's refuse and dust must be removed daily from the common property.",
		],
	},
	{
		id: "vehicles",
		number: 3,
		title: "Vehicles",
		items: [
			"No owner or occupier shall park or stand any vehicle upon the common property without the consent of the trustees in writing.",
			"The trustees may cause to be removed or towed away, at the risk and expense of the owner of the vehicle, any vehicle parked, standing or abandoned on the common property without the trustees' consent.",
			"Owners and occupiers shall ensure that their vehicles, and the vehicles of their visitors and guests, do not drip oil or brake fluid onto the common property or in any other way deface the common property.",
			"No owner or occupier shall be permitted to dismantle or effect major repairs to any vehicle on any portion of the common property, an exclusive use area, or in a section.",
			"No vehicles including caravans, trailers, boats etc. may be parked on the common property.",
			"Parking bay — 1 per unit, no tandem parking.",
			"Owners and occupiers may not park their vehicles in front of the entrance to any garage, irrespective of whether or not they own or rent the garage.",
			"Garage doors are to be kept closed at all times.",
			"Vehicle hooters may not be sounded on the common property other than in an emergency.",
			"Garages and storerooms are not to be used as workshops, or for storing inflammable or noxious materials.",
			"An owner shall not sell, donate nor dispose of any garage to any person other than a member of Hillwood Body Corporate who is a registered owner of a unit.",
			"Bicycles may not be left on the stairwells, passages and walkways.",
			"Garages may not be used as storerooms.",
			"No large abnormal vehicles are permitted on the common property overnight.",
			"No visitors may park on the common property. A fine per day will be imposed on any owner who allows their visitors to park on the common property.",
		],
	},
	{
		id: "damage",
		number: 4,
		title: "Damage, Alterations or Additions to the Common Property",
		items: [
			"No owner or occupier of a section may mark, paint, drive nails or screws or the like into, or otherwise damage or alter, any part of the common property without first obtaining the written consent of the trustees.",
			"The Trustees' written approval must be obtained prior to any attachment to the common property of: (a) any locking device, safety gate, burglar bars or other safety device for the protection of their section; (b) any screen or other device to prevent the entry of animals or insects; (c) any particular device or structure such as television aerials, satellite dishes, or air conditioners.",
			"The nature and design of the device and the manner of its installation must also be supplied to the Trustees for approval.",
			"A fine per day will be imposed on any owner whose occupier affects any unauthorised attachments or improvements to the common property, or places or stores any item on the common property without the prior consent of the Trustees. The fine will be effective from the day after written notice is delivered to such unit.",
		],
	},
	{
		id: "appearance",
		number: 5,
		title: "Appearance from Outside",
		items: [
			"The owner or occupier of a section or unit used for residential purposes shall not place or do anything on any part of the common property, including balconies, patios, stoops, and gardens which, in the discretion of the trustees, is aesthetically displeasing or undesirable when viewed from the outside of the section.",
			"Balconies may not be used for storage and must be maintained in an aesthetically pleasing state.",
		],
	},
	{
		id: "signs",
		number: 6,
		title: "Signs and Notices",
		items: [
			"No owner or occupier of a section or unit used for residential purposes shall place any sign, notice, billboard or advertisement of any kind whatsoever on any part of the common property or of a section or unit, so as to be visible from outside the section or unit, without the written consent of the trustees first having been obtained.",
		],
	},
	{
		id: "littering",
		number: 7,
		title: "Littering",
		items: [
			"An owner or occupier of a section shall not deposit, throw, or permit or allow to be deposited or thrown on the common property and balconies any refuse (including dirt, cigarette butts, food scraps, beverage cans or glasses or any other litter whatsoever). This includes the discarding of cigarette butts on landings, corridors, stairwells and out of windows or doors.",
			"No litter of any nature may be thrown or left in the gardens. No plants, shrubs, flowers or trees are to be removed or damaged.",
			"Flower containers and pots may not be used for cigarette butts.",
		],
	},
	{
		id: "laundry",
		number: 8,
		title: "Laundry",
		items: [
			"An owner or occupier of a section shall not, without the consent in writing of the trustees, erect their own washing lines, nor hang any washing or laundry or any other items on any part of the building or the common property so as to be visible from outside the buildings or from any other sections or units.",
		],
	},
	{
		id: "inflammable",
		number: 9,
		title: "Storage of Inflammable Material and Other Dangerous Acts",
		items: [
			"An owner or occupier shall not store any material, or do or permit or allow to be done any dangerous act in the building or on the common property which will or may increase the rate of the premium payable by the body corporate on any insurance policy.",
			"No braais are allowed on the balconies or on the common property.",
		],
	},
	{
		id: "occupancy",
		number: 10,
		title: "Occupancy and Letting of Units",
		items: [
			"All occupiers of units and other persons granted rights of occupancy by any owner of a section or unit are obliged to comply with these Conduct Rules, notwithstanding any provision to the contrary contained in any lease or any grant of rights of occupancy.",
			"No owner, tenant (lessee) or occupier of a unit shall allow more persons to reside in a unit at any one time than as set out below: (a) 2 adults and 2 children in respect of a two-bedroom section; (b) 4 adults or 2 adults and 3 children in respect of a three-bedroom section.",
			"Any owner who concludes a lease agreement in respect of their section or unit shall supply the trustees or managing agent with the name and contact details of the occupier or tenant (lessee) and shall supply the occupier or tenant with a copy of these Conduct Rules. The owner shall ensure that the occupier or tenant acknowledges receipt of the rules and agrees to abide by them.",
		],
	},
	{
		id: "pests",
		number: 11,
		title: "Eradication of Pests",
		items: [
			"An owner shall keep their section free of white ants, borer and other wood destroying insects and to this end shall permit the trustees, the managing agent, and their duly authorised agents or employees, to enter upon their section from time to time for the purpose of inspecting the section and taking such action as may be reasonably necessary to eradicate any such pests. The costs of inspection, eradication, and replacement of damaged woodwork or other material shall be borne by the owner of the section concerned.",
		],
	},
	{
		id: "insurance",
		number: 12,
		title: "Insurance Claims",
		items: [
			"Hillwood Body Corporate has insurance cover for the premises and is insured against various risks. If you experience any problems such as leaking geysers, damp on walls or ceilings etc., you are to contact the Managing Agent, who will advise and assist you accordingly.",
			"Where there is an insurable event, they will coordinate the claims process. Where claims occur due to an insurable event that originated inside a unit or section, the relevant insurance excess is payable by the owner of that unit.",
			"Owners are ultimately responsible for the maintenance of the interiors of their units.",
		],
	},
	{
		id: "employees",
		number: 13,
		title: "Body Corporate Employees",
		items: [
			"No owners or occupiers shall instruct any Hillwood Body Corporate employees to undertake any work for their personal gain.",
			"No owner or occupier shall instruct any Hillwood Body Corporate employee regarding such duties they may carry out on behalf of the Body Corporate. Any requests for specific duties relating to the employee must be authorised by the Trustees or Managing Agent.",
		],
	},
	{
		id: "noise",
		number: 14,
		title: "Anti-social Behaviour / Noise",
		items: [
			"No owner or occupant shall make an amount of noise which in the opinion of the trustees is excessive or which gives their neighbours reasonable cause for complaint.",
			"All owners and occupants shall ensure that their activities in and use of the common property and sections are conducted with reasonable and diligent care and with due consideration for remaining owners and occupants. This rule shall likewise apply to family, guests and employees of the owners or occupants.",
			"An owner or occupier shall not cause or permit any disorderly conduct upon the section or unit or any part of the common property, or do or permit any act which shall constitute or cause a nuisance or disturbance to any other owner or occupant.",
			"The use of radio, television sets, sound equipment, recording equipment and the like, or the playing of musical instruments to the extent that others are disturbed, is prohibited.",
			"All complaints regarding the behaviour of any occupant shall be directed by the trustees or managing agent to the owner of that section or unit.",
			"Drinking of any alcoholic beverages whatsoever on any part of the common property is prohibited.",
			"Partying on any part of the common property without permission is prohibited.",
			"No noise audible in other sections or units or on the common property may be made during the following quiet time periods: Sundays to Thursdays 22:00 until 07:00; Fridays and Saturdays 23:00 until 07:00.",
			"The use of power tools, hammering and other noise generating equipment shall be permitted during the following periods: Monday to Fridays 08:00 until 18:00; Saturdays 08:30 until 13:30. Sundays and Public Holidays: no noise allowed from power tools, hammering and other noise generating equipment.",
			"Smoking is prohibited on any of the stairwell areas and walkways.",
		],
	},
	{
		id: "fines",
		number: 15,
		title: "Fines",
		items: [
			"The Trustees are empowered to fine an owner for any transgression of the Rules of Conduct an amount agreed by the Trustees from time to time. Such fines to be: (a) minuted at Trustees Meetings; (b) included as part of the levy payment; (c) subject to the law on levy collections.",
			"Schedule A — Level of Agreed Fines: Animals, insects and reptiles — R500; Refuse Disposal — R500; Vehicles — R500 (alternative R200); Damage/Alterations to Common Property — R500 (alternative R200); Appearance from the Outside — R500; Signs and Notices — R500 (alternative R200); Littering — R500; Laundry — R500; Storage of inflammatory material — R500 (alternative R200); Letting of units — R500 (alternative R200); Eradication of Pests — R500; Nuisance — R500; Use — R500 (alternative R200).",
		],
	},
	{
		id: "levies",
		number: 16,
		title: "Levies",
		items: [
			"Owners shall be liable for interest on arrears and other charges outstanding after the 30th day of the month, at a rate of Prime + 2%.",
			"The trustees reserve the right to levy a fee with regard to arrears levy letters, letters of demand and the preparation of all documentation pertaining to any legal action. Such monies shall be calculated and collected by the Managing Agent.",
		],
	},
	{
		id: "liability",
		number: 17,
		title: "Liability",
		items: [
			"Hillwood Body Corporate accepts no responsibility or liability for any accidental damage or injury to any person or party that may occur on the premises.",
			"Parking of vehicles on the common property is subject to the express condition that every vehicle is parked at the owner's risk and responsibility and that no liability shall attach to Hillwood Body Corporate or its agents for any loss or damage suffered in consequence of a vehicle being parked on the common property.",
			"Hillwood Body Corporate and its agents accept no responsibility or liability as a result of access to or from the units not being possible as a result of malfunction, damage or electrical supply interruption to the gates and parking area. In the event of such a problem, it is the responsibility of the person identifying the problem to report it to the Managing Agents or Trustees.",
		],
	},
	{
		id: "domestic-workers",
		number: 18,
		title: "Domestic Workers",
		items: [
			"The owner or occupier of a section or unit shall ensure that staff in their employment, whether casual, temporary or permanent, have in their possession a copy of the employee's ID document or details and that they undertake that the employees do not loiter or cause undue noise on the common property or elsewhere.",
		],
	},
	{
		id: "gates",
		number: 19,
		title: "Gates",
		items: [
			"Owners or occupants of sections are responsible for ensuring that the driveway gate is kept closed at all times and is not left open for domestic workers etc. Failure to do so will compromise the security of the complex.",
			"Occupants are to ensure that their domestic workers do not admit any strangers into the complex via the pedestrian gate or intercom system.",
			"When leaving or entering the premises in your vehicle, please pause and make sure that no one enters the complex while the gate is still open.",
			"Non-compliance with the above could result in a serious security breach at the complex, which may result in the Trustees imposing a fine on the offending occupant.",
		],
	},
	{
		id: "renovations",
		number: 20,
		title: "Unit Renovations and Repairs",
		items: [
			"If internal structural alterations are to be undertaken (demolition of walls or part thereof), a copy of the City of Cape Town approved plans and a structural engineer's certificate must be supplied to the Managing Agent.",
			"All common property areas affected by the work carried out in the units must be repaired, made good or left in the same condition that they were found.",
			"The name of the company or contractor must be supplied to the Managing Agent or Trustees prior to their arrival on the premises.",
			"Contractors' vehicles are permitted to park on the premises only if they are in the designated parking bay of the owner for whom they are working. The owner must therefore park outside.",
			"The contractors must supply copies of their ID documents and that of their staff to the Managing Agents prior to commencement of any work.",
			"The contractor's staff must either wear overalls with the company's name on them or they must be supplied with name tags, worn at all times whilst on the premises of Hillwood.",
			"Internal unit alterations or repairs may only be carried out Monday to Friday between 08:30 and 17:00 (no weekend or public holiday work allowed).",
			"The walkways and stairwells must be covered in ground sheets from the ground floor to the unit in which work is being undertaken. Ground sheets must be removed at the end of the working day and walkways and steps left in a clean condition daily.",
			"All rubble must be removed immediately and not left on site.",
			"The contractor or owner of the unit must supply the contractor's staff with a toilet. No newspaper is to be used in the toilets inside Hillwood.",
			"The contractor and their staff must ensure that the driveway gate has closed behind them when entering or exiting Hillwood.",
			"The contractor or their staff must adhere to any instruction given to them by the Managing Agent, a trustee or resident of Hillwood.",
			"The contractor or their staff must not admit into Hillwood any unknown person asking for access onto Hillwood property.",
			"Taps are to be securely closed after use.",
			"All firefighting equipment on site is not to be tampered with or used other than in the event of a fire.",
			"The common property areas are to be kept clean and free of any litter including cigarette butts. Cigarettes must not be put out against the walls of Hillwood.",
			"The black refuse bins may not be used for the disposal of building rubble.",
		],
	},
];
