import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    companyName,
    phone,
    email,
    heroTitle_en,
    heroTitle_zh,
    heroEyebrow_en,
    heroEyebrow_zh,
    heroSubtitle_en,
    heroSubtitle_zh
  }`);
}

export async function getSolutionsSection() {
  return client.fetch(`*[_type == "solutionsSection"][0]{
    title_en, title_zh,
    items[]{ title_en, title_zh, body_en, body_zh }
  }`);
}

export async function getIndustriesSection() {
  return client.fetch(`*[_type == "industriesSection"][0]{
    title_en, title_zh,
    items[]{ title_en, title_zh, body_en, body_zh }
  }`);
}

export async function getWhyusSection() {
  return client.fetch(`*[_type == "whyusSection"][0]{
    title_en, title_zh,
    items[]{ title_en, title_zh, body_en, body_zh }
  }`);
}

export async function getProcessSection() {
  return client.fetch(`*[_type == "processSection"][0]{
    title_en, title_zh,
    steps[]{ stepNumber, title_en, title_zh, body_en, body_zh }
  }`);
}

export async function getProjectsSection() {
  return client.fetch(`*[_type == "projectsSection"][0]{
    title_en, title_zh,
    items[]{ title_en, title_zh, scope_en, scope_zh, outcome_en, outcome_zh }
  }`);
}

export async function getContactSection() {
  return client.fetch(`*[_type == "contactSection"][0]{
    title_en, title_zh, subtitle_en, subtitle_zh
  }`);
}

export async function getHiringSection() {
  return client.fetch(`*[_type == "hiringSection"][0]{
    title_en, title_zh, desc_en, desc_zh
  }`);
}
