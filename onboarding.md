## Onboarding Process for the US UTM Implementation

Welcome to the US UTM Implementation! This page provides an overview of the onboarding process for service providers and operators (including vertically integrated service providers). The text sections are a summary of the high level onboarding steps, [while the table below provides detailed artifacts and requirements](#onboarding-table) that must be completed at each onboarding step. Note that some links in the table will not work until a prospective service provider has received access to the other Github repositories from one of the co-chairs. Please carefully review the guide and associated timelines to determine your readiness to start the process. Additional information is available in the [onboarding section of the FAQs](faqs.md#onboarding-faqs).

### 1. Sign the Governance Agreement

To become a participant, the first step is to sign the Governance Agreement Form of Joinder (Annex E). Please provide the email address and name of the point of contact (POC) responsible for signing this document to [the Operations Committee](mailto:onboarding@us-utm.simplelogin.com). The document will then be sent to you for signature via DocuSign.

After signing Annex E, please email the names and contact information, including GitHub handles, for your:
+ Operations Committee POC
+ Technical Committee POC
+ Accountable Executive
Send this information to [the Operations Committee](mailto:onboarding@us-utm.simplelogin.com). Note that the POCs and/or Accountable Executive can be the same person or different individuals within your organization. This is a mandatory prerequisite for all applicants. The applicant's chosen representatives will be granted observer status in both the Operations Committee and the Technical Committee during the onboarding period, as soon as the governance agreement Form of Joinder is received and processed. This status allows them to stay informed about the initiative’s activities and developments. Observers have limited voting privileges, as detailed in the governance agreement.

### 2. Automated Testing Onboarding and other artifacts

Upon signing the governance agreement, applicants will have a 60-calendar-day period to complete their official automated testing onboarding (Gates 1 through 3 as defined in Annex B and in the table below). A test configuration will be provided, enabling applicants to conduct tests independently without affecting existing participants. Reference the table to determine which artifacts are required to show completion of each gate and move to the next gate. Prospective service providers will be asked to provide a variety of artifacts based on the references to the governance agreement, including, but not limited to:
+ Files showing automated testing results
+ Documents that show the prospective service provider has an established relationship with an operator, adequate insurance.
+ Certificates showing the prospective service provider's accreditation toward quality, information security and privacy requirements.
+ URLs necessary to enable access to automated testing environments.

### 4. Completion and Compliance

Prospective service providers must complete all automated testing (Gates 1 through 3) and submit other required artifacts within the 60-calendar-day onboarding period. Failure to meet these requirements will result in the applicant being removed from the US UTM Implementation and the loss of observer access to the committees. Prior to the end of the 60-day period, applicants may request a one-time extension of up to 30 additional days from the Operations Committee.

Upon completion of all gates, the service provider will receive a certificate from the Co-Chairs, which will enable the service provider to request access to the production environment. The service provider must continue to meet ongoing requirements identified in the governance agreement to remain active in the governance committees. If removed from the project, applicants may reapply after a waiting period of 90 calendar days from the date of removal.

We are excited to have you join us in advancing the US UTM Implementation. Please follow these guidelines to ensure a successful onboarding experience.

### 5. Table of Onboarding Requirements by Gate
<a name="onboarding-table"></a>
References
- [Operational Practicality Best Practices](https://github.com/utmimplementationus/operations_committee/blob/main/operational-practicality-best-practices.md)
- [Governance Agreement](./docs/USP_Agreement_04012025.pdf)

<table>
<tr>
<th colspan=2>Onboarding Requirements</th>
<th colspan=3>Prospective Participant Action</th>
</tr>
    <tr>
<th>

Agreement Section

</th>
        <th>Requirement Text</th>
        <th>Action ID</th>
        <th>Issue Ticket ID</th>
        <th>Action</th>
    </tr>
    <tr>
        <td rowspan=2>Annex C, Section 5</td>
        <td>A Service Provider [...] may onboard by (1) executing the “Form of Joinder” (Annex E) [...]</td>
        <td>0.1</td>
<td>

**N/A**

</td>
<td>

**[Service Provider]** Submit *all* of the following:
- Send [email](mailto:onboarding@us-utm.simplelogin.com) to Operations Committee Co-Chairs containing:
    - Request to sign the governance agreement Joinder
    - Name and email address of the accountable executive or point of contact (POC) responsible for signing the Joinder
- Sign the Governance Agreement Form of Joinder (Annex E) via DocuSign.

</td>
    </tr>
    <tr>
<td>

A Prospective Service Provider shall notify the Operations Committee at its published contact information. The notification will contain:
- The name and contact information of a point of contact at the Prospective Service Provider.
- Identification of Operators using or who will use UTM Services provided by the Prospective Service Provider (if available).
- The proposed UTM Services. [...]

</td>
        <td>0.2</td>
<td>

**N/A**

</td>
<td>

**[Service Provider/Operator]** Send email request to Operations Committee for [GitHub access](mailto:onboarding@us-utm.simplelogin.com) for Service Provider and/or Operator with
- names and contact information, including GitHub handles, for Service Provider and/or Operator POCs for the Operations Committee and the Technical Committee

***OR***

- declaration that the Operator has opted out from Committee participation (operator only)

**NOTE:** Issue Ticket 0.1 cannot be submitted until at least one Service Provider representative accepts the invitation from Github issued by the Co-Chairs.

</td>
    </tr>
    <tr>
        <td>Annex C, Section 5</td>
<td>
    
A Prospective Service Provider shall notify the Operations Committee at its published contact information. The notification will contain:
- An executed “Form of Joinder” (ANNEX E).
    
</td>
        <td>0.4</td>
<td rowspan=4>

**0.1**

</td>
<td rowspan=2>

**[Service Provider]** Submit the following:
- Signed Form of Joinder (Annex E)
- Proof of insurance.

</td>
    </tr>
    <tr>
        <td>Governance Agreement, Section 16</td>
<td>

Each Party shall, at no cost to any other Party, maintain the following minimum insurance in full force and effect throughout the term of the Agreement: [...]

</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>Annex C, Section 5(a)</td>
<td>

A Prospective Service Provider must [...] demonstrate to the Technical Committee how they will meet the security, privacy, and quality requirements set forth in an applicable SDD.
1. As an alternative to obtaining an ISO/IEC certification as described in the SDD, a Prospective Service Provider may submit documentation to the Operations Committee that establishes that it meets an equivalent level of privacy, security, and quality.
2. The Prospective Service Provider is also responsible for ensuring integrity for data exchanges with its Operators.
3. The Technical Committee will review and approve equivalency documentation in accordance with Section 6 of this Annex.

</td>
        <td>0.6</td>
<td>

**[Service Provider]** Submit *one of* the following:
- ISO/IEC certifications applicable to information security, privacy, and quality requirements.

***OR***

- Link(s) to  respective Technical Committee Issue Ticket(s) indicating written attestation of compliance with the applicable information [security](https://github.com/utmimplementationus/tech_committee/issues/new?template=security_attestation.md), [privacy](https://github.com/utmimplementationus/tech_committee/issues/new?template=privacy_attestation.md), and [quality](https://github.com/utmimplementationus/tech_committee/issues/new?template=quality_attestation.md) requirements.

</td>
    </tr>
    <tr>
        <td>Annex C, Section 5(b), inclusive of subsections</td>
        <td>Artifacts. A Prospective Service Provider is responsible for submitting various artifacts to pass each Gate in ANNEX B, in accordance with the most recent guidance approved by the Technical Committee and/or the Operations These artifacts include, but are not limited to: [...]</td>
        <td>0.7</td>
<td>

**[Service Provider]** Submit *one of* the following:
- Signature page of the signed Service Level Agreement between the Service Provider and the Operator.

***OR***

- Vertically Integrated Service Providers must submit a document naming the organization’s respective individuals directly responsible for operations and UTM service provision in lieu of an SLA signature page. The document must include an affirmation that internal procedures are in place to identify and assign responsibilities in accordance with this Agreement.

***OR***

- For Prospective Service Providers whose initial Operator is a governmental agency, a signed letter of intent may be provided in lieu of an SLA, if the letter of intent includes a date by which the SLA will be signed.

</td>
    </tr>
    <tr>
        <td>Annex C, Section 5</td>
        <td>A Service Provider [...]  may onboard by [...] (2) successfully completing all Service Provider gates in Annex B.</td>
        <td>1.1</td>
<td>

**1.1**

</td>
<td>

**[Service Provider]** [\[Optional\] Submit Issue Ticket for requesting access to the Pre-Qual environment](https://github.com/utmimplementationus/operations_committee/issues/new?assignees=peter-sachs%2Caganjoo&amp;labels=pre-qual%2Conboarding&amp;projects=&amp;template=1_pre-qual-onboarding.yaml&amp;title=Pre-qual+environment+onboarding+request+for+%3Cinsert+company+name+here%3E) if you need access to this environment for own system testing with
- Pre-Qual environment service account
- Base URL for your pre-qual flight planner
- Base URL for your pre-qual version provider
- If hosting/contracting own DSS, DSS URL and CRDB hostnames for the Pre-Qual environment

</td>
    </tr>
    <tr>
        <td>Annex B</td>
<td>

- Implement the service requirements in accordance with the applicable SDD
- Pass automated testing (own system only)
- Submit DSS contract signature page or certificate to begin pool testing
- Submit declaration of having completed a safety hazard assessment (see Annex C, Sec. 5(b))

</td>
        <td>1.2</td>
<td>

**1.2**

</td>
<td>

**\[Service Provider\]** For Gate 1 completion, submit *all of* the following:
- Own system passing test result
- DSS contract signature page, if applicable.
- Declaration of having completed a hazard analysis to identify and mitigate safety risks in accordance with the GUTMA USSP’s Safety Support Assessment process.
- Information necessary for access to Qual-Partners and inclusion in the Early Integration Assessment test configuration:
    - Qual-Partners environment service account
    - Base URL for your Qual-Partners flight planner
    - Base URL for your Qual-Partners version provider
    - If hosting/contracting own DSS, DSS URL and CRDB hostnames for the Qual-Partners environment

</td>
    </tr>
    <tr>
        <td>Annex B</td>

<td>

GATE 2: Simulation
- ​​\[Service Provider\] Pass automated testing (ecosystem)
- \[Joint\] \- Integrate Service Provider and Operator systems

</td>
        <td>2.1</td>
<td>

**2.1**

</td>
<td>

**\[Service Provider\]** For Gate 2 completion, submit *all of* the following:
- Early Integration Assessment (ecosystem) passing test result
- Service Provider and Operator declaration for integration of Service Provider and Operator systems
- Request inclusion in the Simulation Fitness test configuration

</td>
    </tr>
    <tr>
        <td>Annex C, Section 5(c)</td>
<td>

Operators. Operational Practicality for shared airspace, as required by Gate 3 (defined in Annex B), is established through shared airspace simulation. Shared airspace simulation to establish Operational Practicality is required when:
1. A new Operator onboards to an existing shared airspace;
2. 2 or more Operators onboard to a new shared airspace or
3. An Operator is required to re-onboard in accordance with Section 8(a)(ii)(Operator Aggregate Conformance Failure).

</td>
        <td>3.1</td>
<td>

**3.1**

</td>
<td>

**\[Service Provider\]** For Gate 3 operational practicality completion:
- Request access to the Simulation environment with
    - Simulation Fitness passing test result
    - Simulation environment service account

</td>
    </tr>
    <tr>
        <td>Operational Practicality Best Practices</td>
<td>

Achieving operational practicality requires submitting all of the following documents to the Operations Committee:
- A statement of affirmation or dissent from each operator that the simulation represented operational practicality;
- A single KML file with operational intent volumes (no telemetry) of all operators to capture simulation findings; and
- A report of operator aggregate conformance percentage computed by each USS for its operator(s).

</td>
        <td>3.2</td>
<td>

**3.2**

</td>
<td>

**\[Operator\]** For Gate 3 operational practicality completion:
- Acknowledge operational practicality with
    - Summary of your operational practicality simulation consistent with best practices, including participating service providers and operators, and each operator’s aggregate conformance rate.
    - KML file with operational intent volumes.
    - A statement of affirmation or dissent from each operator that the simulation represented operational practicality.

</td>
    </tr>
    <tr>
        <td rowspan=3>Annex B</td>
<td rowspan=2>

GATE 3: Production Flights \- Service Provider
- Pass automated testing (ecosystem) as a part of the software release process

</td>
        <td>3.3</td>
<td>

**3.3**

</td>
<td>

**\[Service Provider\]** Submit Issue Ticket requesting inclusion in the Production Fitness test configuration

</td>
    </tr>
    <tr>
        <td>3.4</td>
<td>

**3.4**

</td>
<td>

**\[Service Provider\]** Submit Issue Ticket for Gate 3 completion with Production Fitness (ecosystem) passing test result

</td>
    </tr>
    <tr>
<td>

GATE 3: Production Flights \- Service Provider
- Receive confirmation of successful onboarding form Operations Committee Co-Chairs

</td>
        <td>3.5</td>
<td>

**3.5**

</td>
<td>

**\[Operations Committee\]** Submit Issue Ticket for onboarding completion.

</td>
    </tr>
    <tr>
<td colspan=5>

**Note: Upon completion of onboarding requirements, the prospective Service Provider will receive confirmation of successful onboarding from Operations Committee Co-Chairs and may request access to the production environment**

</td>
    </tr>
</table>
