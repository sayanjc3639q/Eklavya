import { notFound } from "next/navigation";
import { getEventBySlug, EVENTS_DATA } from "@/features/public-site/data/events-data";
import { EventDetailView } from "@/features/public-site/components/event-detail-view";

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return EVENTS_DATA.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found | Eklavya HIT",
    };
  }

  return {
    title: `${event.title} | Eklavya - Hands That Care`,
    description: event.summary,
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return <EventDetailView event={event} />;
}
