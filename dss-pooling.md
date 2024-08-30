## Operations Committee Policy for DSS Governance
Adopted August 27, 2024

### Desired Outcomes:
1. Provide predictability around DSS Pooling for USPs and the regulator, while enabling flexibility for use of other DSS instances in order to maintain USP Network robustness.
2. Manage each DSS instance through an associated USP that retains technical and governance responsibility for the performance of the DSS instance.
3. Monitor DSS Pool performance over time, adjusting governance and/or technical requirements to address safety, efficiency or DSS Pool performance issues.

### Definitions and Assumptions:
1. The Discovery and Synchronization Service (DSS) comprises one or more DSS instances, which may be hosted by different entities (see ASTM F3548-21, Sec. A2.2.6).
   a. Each DSS instance comprises a number of nodes specified by the Technical Committee
2. The DSS Pool comprises all DSS instances that meet the governance provisions, including test and performance requirements defined by the Technical Committee.
   b. DSS Pools may exist in discrete multiple environments, e.g. qual-partners and production.
3. There is exactly one DSS Pool for a given DSS region. Within the US UTM Implementation, there is one DSS region which matches the national boundaries of the United States.
4. Each DSS instance in the DSS Pool publishes at least one API endpoint in Github for use by any USP in accordance with Technical Committee requirements.
5. Each USP has a means to detect an outage of their DSS instance(s), and has a means to switch to another DSS instance.
6. Each USP has a means to detect the recovery of their DSS instance, and to switch back to it.

### Governance Provisions applicable to USPs:
1. If a USP contracts with a DSS provider that is not also a USP that is a signatory to the governance agreement, then—
   a. The USP is responsible for ensuring that its subcontracted DSS adheres to the privacy and security requirements in Section 5(a) of the governance agreement.
2. Each USP is expected to use its DSS instance to the maximum extent practicable. A USP may have more than one DSS instance.
3. A USP may use any other DSS instance in the DSS Pool for the duration of its own DSS instance’s failure.
4. Each USP will make monthly reports related to performance of its DSS instance(s) using an approved monthly reporting template.

### Governance Provisions applicable to DSSs:
1. A DSS instance that passes automated testing (as defined by the Technical Committee) is verified to be interoperable with other DSS instances in the pool, and with any USP.
2. Each DSS instance in the DSS Pool must adhere to the applicable requirements of the Service Description Document.
3. Each DSS instance in the DSS Pool must be—
   a. Provided by a USP that is a signatory to the governance agreement, or 
   b. A subcontractor to a USP that is a signatory to the governance agreement. 
4. A failure of the DSS instance is a Severity 2 event. 
   a. Failure of a single node within a DSS instance does not constitute an issue subject to SLA resolution, in accordance with Technical Committee definitions.
