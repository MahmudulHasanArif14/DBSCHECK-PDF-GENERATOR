import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

export type Experience = {
  startDate: string;
  endDate: string;
  employer: string;
  position: string;
  reason: string;
};
export type FamilyMember = {
  name: string;
  relationship: string;
  department: string;
  contactNumber?: string;
};
export type EmployeeData = {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  nationality: string;
  maritalStatus: string;
  healthStatus: string;
  contactNumber: string;
  email: string;
  job: string;
  hobby: string;
  idNumber: string;
  address: string;
  postcode: string;
  emergencyName: string;
  emergencyNumber: string;
  photo: string;
  experiences: Experience[];
  hasFamily: string;
  familyMembers: FamilyMember[];
  dbsRequired: string;
  dbsCompleted: string;
  certificateNumber: string;
  dbsDate: string;
  dbsNotes: string;
  additionalInfo: string;
  consent: boolean;
  declarationName: string;
  signature: string;
  declarationDate: string;
};

const BLUE = "#123B5D";
const LIGHT_BLUE = "#EAF2F8";
const LIGHT_GREY = "#F5F7F9";
const GREY = "#D8DEE4";
const DARK_GREY = "#4B5563";
const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingHorizontal: 38,
    paddingBottom: 38,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#1F2937",
  },
  header: {
    position: "absolute",
    top: 18,
    left: 38,
    right: 38,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: 1,
    borderBottomColor: BLUE,
    paddingBottom: 5,
  },
  headerLeft: { color: BLUE, fontFamily: "Helvetica-Bold", fontSize: 8 },
  headerRight: { color: DARK_GREY, fontSize: 8 },
  footer: {
    position: "absolute",
    bottom: 16,
    left: 38,
    right: 38,
    borderTop: 1,
    borderTopColor: GREY,
    paddingTop: 5,
    textAlign: "center",
    color: DARK_GREY,
    fontSize: 7,
  },
  companyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: LIGHT_GREY,
    borderRadius: 4,
    padding: 13,
    marginBottom: 7,
  },
  logo: { width: 58, height: 58, objectFit: "contain", marginRight: 16 },
  companyName: { color: BLUE, fontFamily: "Helvetica-Bold", fontSize: 15 },
  title: {
    color: "#1F2937",
    fontFamily: "Helvetica-Bold",
    fontSize: 18,
    marginTop: 3,
  },
  intro: { color: DARK_GREY, fontSize: 8, marginTop: 5 },
  metadata: {
    flexDirection: "row",
    borderWidth: 0.7,
    borderColor: BLUE,
    marginBottom: 9,
  },
  metaLabel: {
    width: 80,
    backgroundColor: LIGHT_BLUE,
    padding: 6,
    fontFamily: "Helvetica-Bold",
  },
  metaValue: { flex: 1, padding: 6 },
  section: { marginTop: 7, marginBottom: 6 },
  sectionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: BLUE,
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 2,
  },
  sectionTitle: { color: "white", fontFamily: "Helvetica-Bold", fontSize: 11 },
  sectionContext: { color: "white", fontSize: 7 },
  table: { borderWidth: 0.7, borderColor: GREY, marginTop: 3 },
  row: {
    flexDirection: "row",
    minHeight: 25,
    borderBottomWidth: 0.7,
    borderBottomColor: GREY,
  },
  lastRow: { borderBottomWidth: 0 },
  shaded: { backgroundColor: LIGHT_GREY },
  labelCell: { width: "25%", padding: 5, fontFamily: "Helvetica-Bold" },
  valueCell: { flexGrow: 1, flexShrink: 1, flexBasis: 0, width: 0, padding: 5 },
  labelCellSmall: { width: "22%", padding: 5, fontFamily: "Helvetica-Bold" },
  photoCell: {
    width: "24%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: { width: 66, height: 82, objectFit: "cover" },
  logoPhoto: { width: 52, height: 52, objectFit: "contain" },
  photoBox: {
    width: 66,
    height: 82,
    borderWidth: 0.7,
    borderColor: GREY,
    alignItems: "center",
    justifyContent: "center",
  },
  photoText: { color: DARK_GREY, fontSize: 8 },
  checkboxRow: { flexDirection: "row", alignItems: "center" },
  note: {
    backgroundColor: LIGHT_BLUE,
    padding: 7,
    marginTop: 4,
    color: DARK_GREY,
    fontSize: 8,
    lineHeight: 1.3,
  },
  tableHeader: {
    backgroundColor: BLUE,
    color: "white",
    fontFamily: "Helvetica-Bold",
    padding: 5,
  },
  cell: { flexGrow: 1, flexShrink: 1, flexBasis: 0, width: 0, padding: 5 },
  cellBorder: { borderRightWidth: 0.7, borderRightColor: GREY },
  tallRow: { minHeight: 31 },
  checkbox: {
    width: 9,
    height: 9,
    borderWidth: 0.7,
    borderColor: DARK_GREY,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxTick: { fontSize: 8, lineHeight: 1, color: BLUE },
  consent: {
    backgroundColor: LIGHT_GREY,
    borderWidth: 0.7,
    borderColor: GREY,
    padding: 9,
    marginTop: 7,
    lineHeight: 1.3,
  },
  finalBox: {
    backgroundColor: BLUE,
    color: "white",
    padding: 6,
    textAlign: "center",
    marginTop: 8,
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
  },
});

const value = (text?: string) => text || " ";
const Checkbox = ({
  label,
  checked = false,
}: {
  label: string;
  checked?: boolean;
}) => (
  <View style={styles.checkboxRow}>
    <View style={styles.checkbox}>
      {checked && <Text style={styles.checkboxTick}>✓</Text>}
    </View>
    <Text>{label}</Text>
  </View>
);
const FieldRow = ({
  label1,
  value1,
  label2,
  value2,
  shaded = false,
}: {
  label1: string;
  value1?: string;
  label2: string;
  value2?: string;
  shaded?: boolean;
}) => (
  <View style={[styles.row, shaded ? styles.shaded : {}]}>
    <Text style={styles.labelCell}>{label1}</Text>
    <Text style={styles.valueCell}>{value(value1)}</Text>
    <Text style={styles.labelCell}>{label2}</Text>
    <Text style={styles.valueCell}>{value(value2)}</Text>
  </View>
);
const Section = ({
  title,
  context,
  children,
}: {
  title: string;
  context: string;
  children: React.ReactNode;
}) => (
  <View style={styles.section}>
    <View style={styles.sectionBar}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionContext}>{context}</Text>
    </View>
    {children}
  </View>
);
const BlankRows = ({
  count,
  columns,
}: {
  count: number;
  columns: string[];
}) => (
  <>
    {Array.from({ length: count }).map((_, index) => (
      <View
        style={[
          styles.row,
          index === count - 1 ? styles.lastRow : {},
          index % 2 ? styles.shaded : {},
        ]}
        key={index}
      >
        {columns.map((column, cellIndex) => (
          <Text
            style={[
              styles.cell,
              cellIndex < columns.length - 1 ? styles.cellBorder : {},
            ]}
            key={`${column}-${index}-${cellIndex}`}
          >
            {value("")}
          </Text>
        ))}
      </View>
    ))}
  </>
);

export function PdfDocument({
  data,
  employeeNumber,
}: {
  data: EmployeeData;
  employeeNumber: string;
}) {
  const today = new Date().toLocaleDateString("en-GB");
  return (
    <Document
      title={`Western Cars Employee Registration Form - ${data.fullName}`}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerLeft}>WESTERN CARS</Text>
          <Text style={styles.headerRight}>Employee Registration Form</Text>
        </View>
        <View style={styles.footer}>
          <Text>Confidential HR Document | Page 1 of 3</Text>
        </View>
        <View style={styles.companyBox}>
          <Image src="/logo.png" style={styles.logo} />
          <View>
            <Text style={styles.companyName}>WESTERN CARS</Text>
            <Text style={styles.title}>Employee Registration Form</Text>
            <Text style={styles.intro}>
              Please complete all sections clearly and accurately. This form is
              for internal recruitment and HR purposes.
            </Text>
          </View>
        </View>
        <View style={styles.metadata}>
          <Text style={styles.metaLabel}>Date</Text>
          <Text style={styles.metaValue}>{today}</Text>
          <Text style={styles.metaLabel}>Employee No.</Text>
          <Text style={styles.metaValue}>{employeeNumber}</Text>
        </View>
        <Section title="1. Personal Information" context="Applicant Details">
          <View style={styles.table}>
            <FieldRow
              label1="Name"
              value1={data.fullName}
              label2="Gender"
              value2={data.gender}
              shaded
            />
            <FieldRow
              label1="Date of Birth"
              value1={data.dateOfBirth}
              label2="Nationality"
              value2={data.nationality}
            />
            <FieldRow
              label1="Marital Status"
              value1={data.maritalStatus}
              label2="Health Status"
              value2={data.healthStatus}
              shaded
            />
            <FieldRow
              label1="Contact Number"
              value1={data.contactNumber}
              label2="Apply for Job"
              value2={data.job}
            />
            <View style={[styles.row, styles.shaded, styles.lastRow]}>
              <Text style={styles.labelCell}>Hobby</Text>
              <Text style={styles.valueCell}>{value(data.hobby)}</Text>
              <Text style={styles.labelCell}></Text>
              <Text style={styles.valueCell}></Text>
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.labelCellSmall}>NI Number</Text>
              <Text style={styles.valueCell}>{value(data.idNumber)}</Text>
              <Text style={styles.labelCellSmall}>Photograph</Text>
              <View style={styles.photoCell}>
                {data.photo ? (
                  <Image src={data.photo} style={styles.photo} />
                ) : (
                  <View style={styles.photoBox}>
                    <Text style={styles.photoText}>PHOTO</Text>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.labelCellSmall}>Home Address</Text>
              <Text style={styles.valueCell}>{value(data.address)}</Text>
              <Text style={styles.labelCellSmall}></Text>
              <Text style={styles.valueCell}></Text>
            </View>
            <View style={[styles.row, styles.lastRow]}>
              <Text style={styles.labelCellSmall}>Postcode</Text>
              <Text style={styles.valueCell}>{value(data.postcode)}</Text>
              <Text style={styles.labelCellSmall}>Emergency No</Text>
              <Text style={styles.valueCell}>
                {value(data.emergencyNumber)}
              </Text>
            </View>
          </View>
        </Section>
        <Section title="2. Work Experience" context="Previous Employment">
          <Text style={styles.note}>
            Please provide details of your previous employment, starting with
            your most recent employer.
          </Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={[styles.cell, styles.tableHeader]}>Start Date</Text>
              <Text style={[styles.cell, styles.tableHeader]}>End Date</Text>
              <Text style={[styles.cell, styles.tableHeader]}>Employer</Text>
              <Text style={[styles.cell, styles.tableHeader]}>
                Job / Position
              </Text>
              <Text style={[styles.cell, styles.tableHeader]}>
                Reason for Leaving
              </Text>
            </View>
            {data.experiences.slice(0, 4).map((item, index) => (
              <View
                style={[
                  styles.row,
                  index === 3 ? styles.lastRow : {},
                  index % 2 ? styles.shaded : {},
                ]}
                key={index}
              >
                <Text style={styles.cell}>{value(item.startDate)}</Text>
                <Text style={styles.cell}>{value(item.endDate)}</Text>
                <Text style={styles.cell}>{value(item.employer)}</Text>
                <Text style={styles.cell}>{value(item.position)}</Text>
                <Text style={styles.cell}>{value(item.reason)}</Text>
              </View>
            ))}
            <BlankRows
              count={Math.max(0, 4 - data.experiences.length)}
              columns={["", "", "", "", ""]}
            />
          </View>
        </Section>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerLeft}>WESTERN CARS</Text>
          <Text style={styles.headerRight}>Employee Registration Form</Text>
        </View>
        <View style={styles.footer}>
          <Text>Confidential HR Document | Page 2 of 3</Text>
        </View>
        <View style={{ alignItems: "center", marginBottom: 6 }}>
          <Text
            style={{ color: BLUE, fontFamily: "Helvetica-Bold", fontSize: 14 }}
          >
            Western Cars Employee Registration Form
          </Text>
          <Text style={{ color: DARK_GREY, fontSize: 8, marginTop: 2 }}>
            Family, DBS, Consent and HR Information
          </Text>
        </View>
        <Section title="3. Family Members" context="Western Cars Declaration">
          <View style={styles.note}>
            <Text style={{ fontFamily: "Helvetica-Bold", color: "#1F2937" }}>
              Do you have any family members working at Western Cars?
            </Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Checkbox label="Yes" />
              <View style={{ width: 28 }} />
              <Checkbox label="No" />
            </View>
          </View>
          <Text style={{ color: DARK_GREY, fontSize: 8, marginVertical: 5 }}>
            If yes, please provide the following details:
          </Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={[styles.cell, styles.tableHeader]}>Name</Text>
              <Text style={[styles.cell, styles.tableHeader]}>
                Relationship
              </Text>
              <Text style={[styles.cell, styles.tableHeader]}>
                Employer / Department
              </Text>
              <Text style={[styles.cell, styles.tableHeader]}>
                Contact Number
              </Text>
            </View>
            {data.familyMembers.slice(0, 3).map((member, index) => (
              <View
                style={[
                  styles.row,
                  index === 2 ? styles.lastRow : {},
                  index % 2 ? styles.shaded : {},
                ]}
                key={index}
              >
                <Text style={styles.cell}>{value(member.name)}</Text>
                <Text style={styles.cell}>{value(member.relationship)}</Text>
                <Text style={styles.cell}>{value(member.department)}</Text>
                <Text style={styles.cell}>{value(member.contactNumber)}</Text>
              </View>
            ))}
            <BlankRows
              count={Math.max(0, 3 - data.familyMembers.length)}
              columns={["", "", "", ""]}
            />
          </View>
        </Section>
        <Section title="4. DBS Check" context="For HR Use">
          <Text style={styles.note}>
            A Disclosure and Barring Service (DBS) check may be required
            depending on the role and responsibilities associated with the
            position.
          </Text>
          <View style={styles.table}>
            <View style={[styles.row, styles.shaded]}>
              <Text style={styles.labelCell}>DBS Check Required</Text>
              <View style={styles.valueCell}>
                <Checkbox label="Yes" />
              </View>
              <Text style={styles.labelCell}>DBS Completed</Text>
              <View style={styles.valueCell}>
                <Checkbox label="Yes" />
              </View>
            </View>
            <View style={[styles.row, styles.lastRow]}>
              <Text style={styles.labelCell}></Text>
              <View style={styles.valueCell}>
                <Checkbox label="No" />
              </View>
              <Text style={styles.labelCell}></Text>
              <View style={styles.valueCell}>
                <Checkbox label="No" />
              </View>
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.labelCell}>DBS Certificate Number</Text>
              <Text style={styles.valueCell}>
                {value(data.certificateNumber)}
              </Text>
            </View>
            <View style={[styles.row, styles.shaded]}>
              <Text style={styles.labelCell}>Date of DBS Check</Text>
              <Text style={styles.valueCell}>{value(data.dbsDate)}</Text>
            </View>
            <View style={[styles.row, styles.lastRow]}>
              <Text style={styles.labelCell}>DBS Status / Notes</Text>
              <Text style={styles.valueCell}>{value(data.dbsNotes)}</Text>
            </View>
          </View>
        </Section>
        <Section
          title="5. Additional Information"
          context="Applicant Information"
        >
          <View style={[styles.table, styles.tallRow]}>
            <Text style={styles.valueCell}>{value(data.additionalInfo)}</Text>
          </View>
        </Section>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerLeft}>WESTERN CARS</Text>
          <Text style={styles.headerRight}>Employee Registration Form</Text>
        </View>
        <View style={styles.footer}>
          <Text>Confidential HR Document | Page 3 of 3</Text>
        </View>
        <Section title="6. Data Protection & Consent" context="GDPR">
          <View style={styles.consent}>
            <Text>
              Western Cars will process the personal information provided on
              this form for recruitment, employment administration, identity
              verification, and other legitimate employment-related purposes.
              The information provided will be handled in accordance with
              applicable UK data protection legislation and Western Cars&apos;
              internal data protection and privacy procedures.{`\n\n`}By signing
              below, I confirm that the information I have provided is accurate
              and understand that my information may be processed for the
              purposes described above.
            </Text>
            <View style={{ flexDirection: "row", marginTop: 7 }}>
              <Checkbox
                label="I confirm that I have read and understood the above statement."
                checked={data.consent}
              />
            </View>
          </View>
        </Section>
        <Section
          title="7. Employee Declaration"
          context="Applicant Confirmation"
        >
          <Text style={{ fontSize: 8, lineHeight: 1.3 }}>
            I confirm that the information provided on this registration form is
            true, complete and accurate to the best of my knowledge.{`\n`}I
            understand that providing false, incomplete or misleading
            information may affect my employment application and/or employment
            with Western Cars.
          </Text>
          <View style={styles.table}>
            <FieldRow
              label1="Employee Name"
              value1={data.declarationName}
              label2="Date"
              value2={data.declarationDate}
              shaded
            />
            <FieldRow
              label1="Employee Signature"
              value1={data.signature}
              label2="Date"
              value2={data.declarationDate}
            />
          </View>
        </Section>
        <Section title="8. For Office Use Only" context="HR Department">
          <View style={styles.table}>
            <FieldRow
              label1="Application Received By"
              value1=""
              label2="Date Received"
              value2=""
              shaded
            />
            <FieldRow
              label1="Interview Date"
              value1=""
              label2="Outcome / Notes"
              value2=""
            />
            <FieldRow
              label1="HR / Manager Name"
              value1=""
              label2="Date"
              value2=""
              shaded
            />
            <FieldRow label1="Signature" value1="" label2="Date" value2="" />
          </View>
        </Section>
        <Text style={styles.finalBox}>
          WESTERN CARS | Employee Registration Form | Confidential HR Document
        </Text>
      </Page>
    </Document>
  );
}
