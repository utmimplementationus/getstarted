# Onboarding Requirements

This document defines the sequential onboarding requirements and actions for prospective participants, structured as a traceability matrix aligned with the Governance Agreement.

The onboarding framework ensures a standardized, traceable, and scalable process for integrating new participants into the UTM ecosystem across services.

## NRID Onboarding Requirements

<table>
<tr>
<th colspan=2>Onboarding Requirements</th>
<th colspan=4>Prospective Participant Action</th>
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
        <td rowspan=2>Annex F, Section (3), GATE 0: Initial Participation</td>
        <td>

* Achieved per Strategic Coordination Gate 0
        </td>
        <td>0.1</td>
<td>

0.1

</td>
<td>

**[Service Provider]** Submit the following:

Link to issue ticket showing that USP has:

* Achieved Strategic Coordination Gate 0 requirements.

***OR***

* Completed all Strategic Coordination onboarding requirements.

</td>
    </tr>
    <tr>
<td>

* Achieved per Strategic Coordination Gate 0
* Submit signed signature page of Service Level Agreement (SLA) that contains NetRID service

</td>
        <td>0.2</td>
<td>

0.2

</td>
<td>

**[Service Provider and Operator]** Submit *one* of the following:

* Signature page of the signed Service Level Agreement between the Service Provider and the Operator.

***OR***

* Vertically Integrated Service Providers must submit a document naming the organization's respective individuals directly responsible for operations and UTM service provision in lieu of an SLA signature page. The document must include an affirmation that internal procedures are in place to identify and assign responsibilities in accordance with this Agreement.

***OR***

* For Service Providers whose initial Operator is a governmental agency, a signed letter of intent may be provided in lieu of an SLA, if the letter of intent includes a date by which the SLA will be signed.

***OR***

* Written confirmation that the USP has provided Terms and Conditions or a similar document that would apply to all users of the service, including specific limitations on data access and data retention.

Declaration that USP has achieved Strategic Coordination Gate 0 requirements.

</td>
    </tr>
    <tr>
    <td rowspan=2>Annex F, Section (3), GATE 1: Qualification Testing</td>
        <td>

* Pass automated testing (own system only)
    </td>
<td>1.1</td>
<td>1.1</td>
<td>

**[Service Provider]** [\[Optional\] Submit Issue Ticket for requesting access to the Pre-Qual environment](https://github.com/utmimplementationus/operations_committee/issues/new?template=%5BNRID-1.1%5D_request_access_prequal_template.yaml) if you need access to this environment for own system testing with

* Requested Service: Network Remote ID
* Pre-Qual environment service account (same as Strategic Coordination Service)
* Service Provider:
  * Injection bas URL
Display Provider:
  * Observation base URL
* Server URL regular expressions for USS identification
* Test environment NetRID version provider URL
* NetRID DSS instances base URL
* NetRID DSS nodes

</td>
    </tr>
    <tr>
<td>

* Implement the service requirements in accordance with the  the complete NetRID SDD
* Pass automated testing (own system only)
* Submit NetRID contract signature page or certificate to begin pool testing
* Submit declaration of having completed a safety hazard assessment (see Annex C, Section 5(b))

</td>
        <td>1.2</td>
<td>

1.2

</td>
<td>

**\[Service Provider\]** For Gate 1 completion, submit *all of* the following:

* Own system passing test result
* DSS contract signature page, or materials necessary to begin NetRID DSS Pool testing consistent with the process accepted by the Technical Committee.
* Email address of at least one on-call point of contact for notifications, including to address SLA-related issues.
* Declaration of having completed a hazard analysis to identify and mitigate safety risks in accordance with the GUTMA USSP's Safety Support Assessment process.

*Note: The Safety Assessment is required, even if NetRID is not intended to be used for a safety-related function, to ensure that the USP has sufficiently assessed the service functionality for any new hazards that may be introduced due to its use, degradation or failure.*

* Information necessary for access to Qual-Partners and inclusion in the Early Integration Assessment test configuration:
  * Requested Service: Network Remote ID
  * Qual-Partners environment service account (same as Strategic Coordination Service)
  * Service Provider:
    * Injection base URL
  * Display Provider:
    * Observation base URL
  * Server URL regular expressions for USS identification
  * Test environment NetRID version provider URL
  * NetRID DSS instances base URL
  * NetRID DSS nodes

</td>
    </tr>
    <tr>
        <td rowspan=2>Annex F, Section (3), GATE 2: Simulation</td>

<td>

* Pass automated testing (ecosystem)

</td>
        <td>2.1</td>
<td>

2.1

</td>
<td>

**\[Service Provider\]** For Gate 2 completion, submit *all of* the following:

* Early Integration Assessment (ecosystem) passing test result

</td>
   </tr>
<td>

* Integrate Service Provider and Operator systems

</td>
        <td>2.1</td>
<td>

2.1

</td>
<td>

**\[Service Provider and Operator\]** For Gate 2 completion, submit *all of* the following:

* Service Provider and Operator declaration for integration of Service Provider and Operator systems

</td>
    </tr>
    <tr>
        <td rowspan=2>Annex F, Section (3), GATE 3: Production Flights</td>
<td rowspan=2>

* Pass automated testing (ecosystem) as a part of the software release process

</td>
        <td>3.1</td>
<td>

3.1

</td>
<td>

**\[Service Provider\]** Submit Issue Ticket requesting inclusion in the Production Fitness test configuration

</td>
    </tr>
    <tr>
        <td>3.2</td>
<td>

3.2

</td>
<td>

**\[Service Provider\]** Submit Issue Ticket for Gate 3 completion with Production Fitness (ecosystem) passing test result

</td>
    </tr>
    <tr>
        <td>Annex F, Section (3), GATE 3: Production Flights</td>
<td>

* Receive confirmation of successful onboarding from Operations Committee Co-Chairs.

</td>
        <td>3.5</td>
<td>

3.5

</td>
<td>

**\[Operations Committee\]** Submit Issue Ticket for onboarding completion

</td>
    </tr>
    <tr>
<td colspan=6>

**Note: Upon completion of onboarding requirements, the prospective Service Provider will receive confirmation of successful onboarding from Operations Committee Co-Chairs and may request access to the production environment**

</td>
    </tr>
</table>
