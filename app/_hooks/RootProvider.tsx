"use client";
import { PortfolioProps } from "@/types/portfolio";
import { createContext } from "react";

export const RootContext = createContext<PortfolioProps | null>(null);
