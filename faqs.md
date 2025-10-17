## General FAQs

### What is the US UTM Implementation?

UAS Traffic Management (UTM) implementation in the US is the operationalization of UTM services to support complex UAS operations, with an initial focus on furthering shared airspace.

Shared airspace is the digital coordination of intended UA flight paths with overlapping operators in support of FAA Order 8040.6A and complex operations. This implementation of shared airspace leverages the strategic conflict detection and aggregated conformance monitoring services (collectively identified as strategic coordination) defined in [ASTM F3548-21 Standard Specification for UAS Traffic Management (UTM) UAS Service Supplier (USS) Interoperability](https://www.astm.org/f3548-21.html). These services are expected to be accepted by the FAA per the [Near Term Approvals Process (NTAP)](https://www.faa.gov/uas/advanced_operations/traffic_management), or via other means such as an FAA Letter of Acceptance, and incorporate participation and feedback from the FAA and NASA. Participants include Service Providers and Operators with the need to reduce UA to UA risk and who have signed the agreement available on the Get Started page.

### Why should I join the US UTM Implementation?

The US UTM Implementation was driven by operational demand. As complex drone operations proliferate, UAS operators are solving cooperative airspace needs through data sharing practices and the use of the [ASTM F3548-21 Standard Specification for UAS Traffic Management (UTM) UAS Service Supplier (USS) Interoperability](https://www.astm.org/f3548-21.html).
UAS Operators and UTM Service Providers who have a need to share airspace with other complex drone operations as required by [FAA Order 8040.6A](https://www.faa.gov/regulations_policies/orders_notices/index.cfm/go/document.information/documentID/1042092) can join the US UTM Implementation.

### Am I ready to join the US UTM Implementation?	

To join the US UTM Implementation, participants must be ready to pass Gate 1 criteria and sign the governance agreement as provided on the Get Started page. See the [onboarding steps](onboarding.md) and the next section of the FAQs for more information.

### What is covered in the governance agreement?	

Digital coordination of flight intent requires the exchange of data among service providers. The agreement governs three main topics 1. what data can be exchanged and how it can be used, 2. how others can join the agreement, and 3. how to address situations when companies are not performing as expected.

### Is this implementation regionally limited?	

No. While stemming from the operational and commercial need for shared airspace currently seen in the busy North Texas drone services market, this agreement can be operationalized anywhere in the US, provided the parties involved have the appropriate permissions and need to do so.

### How does it relate to the UTM Key Site? 	

For information about the FAA’s UTM Key Site Operational Evaluation, [see here](https://www.faa.gov/uas/research_development/traffic_management/UTM-Key-Site-Ops-Eval-Workshop.pdf).

### How do I sign the governance agreement?	

[Send an email to the Operations Committee](mailto:onboarding@us-utm.simplelogin.com) when you are ready to sign.

### How do I show that I passed Gate 1 criteria?	

If you have already passed Gate 1, please upload your single-operator test report when you submit your operator participation interest form. Otherwise, attach the test report [in an email to the Operations Committee](mailto:onboarding@us-utm.simplelogin.com).

### I'm interested in providing other services besides strategic coordination. Can I still join the US UTM implemenation?	

At this time, the US UTM Implementation is focused on standing up core strategic coordination services to manage UA-UA collision risk. As the technical roadmap matures, other interoperable service options may also be managed through the US UTM Implementation committees. If you offer SDSP capabilities, you may pursue partnerships directly with operators or other service providers (subject to applicable regulatory approval), but you do not need to formally join the US UTM Implementation.

### I'd like to join the committee meetings and/or read the minutes of past committee meetings. How can I get access?	

The Operations Committee and Technical Committee meetings, along with their minutes, are open to any stakeholders who have signed the governance agreement and passed the Gate 1 criteria. Government officials (other than FAA) who have questions about committee proceedings should contact the [Operations Committee](mailto:onboarding@us-utm.simplelogin.com), and/or the [Technical Committee](mailto:technical-committee@us-utm.simplelogin.com), with specific requests.

### How is this inititiave funded?	

Operators, service providers and other stakeholders are expected to cover their own costs of participation. 

### Are there any fees for joining the UTM Implementation cohort?	

No, joining the US UTM Implementation is free of charge. However, according to the data sharing and governance agreement, members must cover all of their expenses.

## Onboarding FAQs

### What documentation should I review before starting onboarding?

Review the [Governance Agreement](https://github.com/utmimplementationus/getstarted/blob/main/docs/USP_Agreement_04012025.pdf), [SDD](https://github.com/utmimplementationus/getstarted/blob/main/docs/UA-UA_Strategic_Coordination_SDD_V1.4.pdf), and issue ticket workflow to understand expectations and technical requirements.

### What are the onboarding gates and what do they require?

There are three gates: Gate 1 (Qualification Testing), Gate 2 (Simulation), and Gate 3 (Production Flights). Each gate has specific technical and operational criteria outlined in the [Governance Agreement](https://github.com/utmimplementationus/getstarted/blob/main/docs/USP_Agreement_04012025.pdf).


### Where can I find onboarding materials?

All onboarding resources are grouped in a [checklist](https://github.com/utmimplementationus/getstarted/blob/main/onboarding.md#5-table-of-onboarding-requirements-by-gate). (5. Table of Onboarding Requirements by Gate)

### How do I formally disengage or offboard?

Disengaging from the Platform requires a formal **GitHub Support Ticket** in the Operations Committee repository.

### When do I get voting rights?

Voting rights are granted during the onboarding process, after Gate 3.

### What should a USP do if they need to temporarily remove themselves from a test configuration due to a testing issue (e.g., SEV2 in prod-fitness)?

If a USP encounters a blocking issue during testing and needs to temporarily remove themselves from a test configuration like **prod-fitness**, the correct procedure is to:
1.  **Submit a configuration change request** using the appropriate GitHub issue template.
2.  Use the following link to open the request:[Automated Test Config Change Template](https://github.com/utmimplementationus/operations_committee/issues/new?template=6_automated_test_config_change.yaml)
This ensures the Operations Committee is notified and can coordinate the change without disrupting other participants.

### Where can I find the latest version of Strategic Coordination Service Description Document (SDD)

You can find the SDD v1.4. [here](https://github.com/utmimplementationus/getstarted/blob/main/docs/UA-UA_Strategic_Coordination_SDD_V1.4.pdf).

### Where can I find the technical roadmap and automated testing baseline as per Section 3.b of the Governance Agreement.

The latest Shared Airspace Technical Committee Roadmap can be found [here](https://github.com/utmimplementationus/tech_committee/blob/286cba67ace83a7ddfaccd8620ebacf4066a83d5/docs/tech_commitee_roadmap/tech_commitee_roadmap.md). Automated testing baselines can be found [here](https://github.com/utmimplementationus/tech_committee/tree/main/automated_testing/configuration).

### How do I get access to the additional technical documentation that I need in order to prepare for passing the gates?

These materials are provided once you sign the governance agreement -- that includes the endpoint and configuration for the RPAS Platform, which provides authorization tokens, hosts the ecosystem automated test environment, and provisions the test runner. Some companies choose to build their USS and initially test against their own instance of the InterUSS test suite using the open-source materials available before signing the governance agreement. The current test baseline is indicated in v1.1 of the SDD, which is publicly posted on the governance site.

Thus, Gate 1 can be passed using your own tooling and without having to connect to the RPAS Platform (and prior to signing the governance agreement) if you choose; alternatively, once you sign the governance agreement, you can choose to use the pre-qual environment of the RPAS Platform.

### What does "integration" mean in the context of passing Gate 2?

Gate 2 integration consists of the technical ability for the operator and service provider to appropriately exchange data as required by the standard and considering the respective responsibilities in the governance agreement. "Integration" in this context *does not* mean that necessary FAA approvals/waivers/exemptions have necessarily been secured. FAA approvals are subject to their own timelines, so the Operations Committee does not make any of the governance onboarding steps dependent on FAA actions. 

### Because there are dependencies between the Operator and Service Provider participants, what should a new participant do to manage the risks in getting integration completed within the prescribed 60-day period?

The Operations Committee understands that unforeseen challenges could arise, and that’s why the process includes a 30-day extension. Onboarding providers must request the extension, and it will then be granted. The Operations Committee made a deliberate choice not to attach conditions or criteria to the extension. 

### How do new participants verify and achieve operational practicality (Gate 3)?

Validation of operational practicality involves conducting coordinated, simultaneous simulations with the other shared airspace members that you reasonably expect to overlap with in real life. The process is described in Section 4(c) of the governance agreement. The key is that other operators and service providers are also part of that simulation set using their own USSs, and using reasonable assumptions about where overlapping operations will occur in real-world conditions.
