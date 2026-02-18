import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

const Contributions = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mx-5 mt-10 flex flex-col sm:mx-9"
        >
            <h1 className="text-[#e5e5e5] text-2xl font-bold tracking-tight md:text-3xl">
                My Contributions
            </h1>

            {/* Calendar wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="mt-4 overflow-x-auto no-scrollbar rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm"
            >

                <p className="mb-3 text-xs text-white/50">
                    GitHub activity over the last year
                </p>

                <GitHubCalendar
                    username="abhishekpandey-001"
                    colorScheme="dark"
                    blockSize={11}
                    blockMargin={2}
                    fontSize={14}
                    blockRadius={1}
                    errorMessage="Can't acces github currently"
                    theme={{ light: ['hsl(0, 0%, 92%)', 'firebrick'], dark: ['#333', 'rgb(214, 16, 174)'] }}
                    style={{

                    }}
                />
            </motion.div>
        </motion.section>
    );
};

export default Contributions;
