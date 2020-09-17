import { atom } from "recoil";
import { ReactComponent as Icon } from "../../components/atoms/icons/informing-citizens-ICON.svg";

enum Section {
  "InformingCitizens" = "InformingCitizens",
  "Issueframing" = "Issueframing",
  "CitizenProvidingInformation" = "CitizenProvidingInformation",
  "CitizensProvidingIdeas" = "CitizensProvidingIdeas",
  "CitizensProvidingTechnicalExpertise" = "CitizensProvidingTechnicalExpertise",
  "Deliberation" = "Deliberation",
  "CitizensDevelopingProposals" = "CitizensDevelopingProposals",
  "CitizensScrutinisingProposals" = "CitizensScrutinisingProposals",
  "CitizensMakingDecisions" = "CitizensMakingDecisions",
  "MonitoringAndAssessment" = "MonitoringAndAssessment",
}

export const sections = [
  {
    id: Section.InformingCitizens,
    icon: Icon,
  },
  {
    id: Section.Issueframing,
    icon: Icon,
  },
  {
    id: Section.CitizenProvidingInformation,
    icon: Icon,
  },
  {
    id: Section.CitizensProvidingIdeas,
    icon: Icon,
  },
  {
    id: Section.CitizensProvidingTechnicalExpertise,
    icon: Icon,
  },
  {
    id: Section.Deliberation,
    icon: Icon,
  },
  {
    id: Section.CitizensDevelopingProposals,
    icon: Icon,
  },
  {
    id: Section.CitizensScrutinisingProposals,
    icon: Icon,
  },
  {
    id: Section.CitizensMakingDecisions,
    icon: Icon,
  },
  {
    id: Section.MonitoringAndAssessment,
    icon: Icon,
  },
];

export const onboarding = atom({
  key: "onboarding", // unique ID (with respect to other atoms/selectors)
  default: false, //
});
