export default function AboutSection() {
  const skills = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Python', 'C++',
  'Solidity', 'Django', 'Web3.js', 'Tailwind CSS', 'MySQL',
  'MongoDB', 'Git', 'Ganache', 'Truffle', 'TensorFlow', 'Keras'
];

  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <img 
                  src="/professional-developer-headshot.png" 
                  alt="Alex - Developer"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              As a BSc IT student with hands-on experience in full-stack development and blockchain, I specialize in building modern, scalable web applications using technologies like React.js, Django, and Solidity. I'm passionate about writing clean, efficient code, enhancing user experience, and continuously expanding my skill set.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
