const contentData = {
    human: (
      <>
        <h3 className="text-xl font-bold mb-2">Overview of the Human Body</h3>
        <p>The human body is a complex structure comprising multiple interdependent systems that maintain life and functionality:</p>
        <h4 className="text-lg font-semibold mt-4">Major Systems</h4>
        <ul className="list-disc list-inside space-y-1">
          <li><b>Skeletal System</b>: Provides structure and support, protects vital organs, and enables movement.</li>
          <li><b>Muscular System</b>: Facilitates movement and posture, and generates heat.</li>
          <li><b>Circulatory System</b>: Transports oxygen, nutrients, and waste through the blood.</li>
          <li><b>Respiratory System</b>: Enables gas exchange (oxygen intake and carbon dioxide release).</li>
          <li><b>Digestive System</b>: Breaks down food to absorb nutrients and eliminate waste.</li>
          <li><b>Nervous System</b>: Coordinates bodily functions via the brain, spinal cord, and nerves.</li>
          <li><b>Endocrine System</b>: Regulates hormones and metabolic activities.</li>
          <li><b>Reproductive System</b>: Responsible for producing offspring.</li>
          <li><b>Urinary System</b>: Maintains fluid balance and eliminates waste through urine.</li>
          <li><b>Integumentary System</b>: Protects the body with skin, hair, and nails.</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Fascinating Facts</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>The human body contains about <b>37.2 trillion cells</b>.</li>
          <li>The <b>heart beats over 100,000 times a day</b>, pumping around 5 liters of blood per minute.</li>
          <li>The <b>largest organ</b> is the skin, covering about 20 square feet.</li>
          <li>The <b>small intestine</b> is about 20 feet long, aiding in nutrient absorption.</li>
        </ul>
      </>
    ),
    heart: (
      <>
        <h3 className="text-xl font-bold mb-2">Human Heart: Anatomy Overview</h3>
        <h4 className="text-lg font-semibold mt-4">Function</h4>
        <p>Pumps oxygenated blood to the body and deoxygenated blood to the lungs.</p>
        <h4 className="text-lg font-semibold mt-4">Chambers</h4>
        <ul className="list-disc list-inside space-y-1">
          <li><b>Right Atrium</b>: Receives deoxygenated blood.</li>
          <li><b>Right Ventricle</b>: Pumps blood to the lungs.</li>
          <li><b>Left Atrium</b>: Receives oxygenated blood.</li>
          <li><b>Left Ventricle</b>: Pumps oxygenated blood to the body.</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Major Vessels</h4>
        <ul className="list-disc list-inside space-y-1">
          <li><b>Aorta</b>: Carries oxygenated blood from the heart.</li>
          <li><b>Pulmonary Arteries</b>: Carry blood to the lungs.</li>
          <li><b>Vena Cava</b>: Returns deoxygenated blood to the heart.</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Valves</h4>
        <p>Prevent backflow of blood:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Tricuspid</li>
          <li>Pulmonary</li>
          <li>Mitral</li>
          <li>Aortic</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Did You Know?</h4>
        <p>The human heart beats approximately <b>100,000 times per day</b>, circulating around <b>5 liters of blood per minute</b>!</p>
      </>
    ),
    brain: (
      <>
        <h3 className="text-xl font-bold mb-2">Skull Anatomy Overview</h3>
        <h4 className="text-lg font-semibold mt-4">Key Features</h4>
        <ul className="list-disc list-inside space-y-1">
          <li><b>Cranium</b>: Protects the brain and supports facial structures.</li>
          <li><b>Facial Bones</b>: Include the maxilla (upper jaw) and mandible (lower jaw).</li>
          <li><b>Sutures</b>: Immovable joints connecting skull bones, such as the coronal and sagittal sutures.</li>
          <li><b>Foramina</b>: Openings for nerves and blood vessels, e.g., the foramen magnum.</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Functions</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Encloses and safeguards the brain.</li>
          <li>Provides attachment points for muscles.</li>
          <li>Houses the sensory organs (eyes, ears, nose).</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Interesting Fact</h4>
        <p>The adult skull consists of 22 bones that are fused except for the mandible, which is movable.</p>
      </>
    ),
    frontBody: (
      <>
        <h3 className="text-xl font-bold mb-2">Human Musculature Overview</h3>
        <h4 className="text-lg font-semibold mt-4">Muscular System</h4>
        <p>The image depicts the muscular system of the human body, showcasing key muscle groups and their anatomical positions.</p>
        <h4 className="text-lg font-semibold mt-4">Primary Focus</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Chest muscles: <b>Pectoralis major</b></li>
          <li>Arm muscles: <b>Biceps, triceps</b></li>
          <li>Leg muscles: <b>Quadriceps, hamstrings</b></li>
          <li>Core muscles: <b>Abdominals, obliques</b></li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Purpose</h4>
        <p>To aid in understanding human anatomy for education, medical studies, or fitness training.</p>
        <h4 className="text-lg font-semibold mt-4">Applications</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Medical education</li>
          <li>Physiotherapy</li>
          <li>Fitness and strength training</li>
        </ul>
      </>
    ),
    liver: (
      <>
        <h3 className="text-xl font-bold mb-2">Liver: Anatomy and Functions</h3>
        <h4 className="text-lg font-semibold mt-4">Functions</h4>
        <ul className="list-disc list-inside space-y-1">
          <li><b>Detoxification</b>: Filters toxins from the blood.</li>
          <li><b>Protein Synthesis</b>: Produces essential proteins for blood clotting and other functions.</li>
          <li><b>Bile Production</b>: Produces bile to aid in digestion of fats.</li>
          <li><b>Storage</b>: Stores vitamins and minerals, such as iron and vitamin A.</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Interesting Fact</h4>
        <p>The liver is the largest internal organ and can regenerate itself if a part is damaged or removed.</p>
      </>
    ),
    intestine: (
      <>
        <h3 className="text-xl font-bold mb-2">Intestine: Structure and Function</h3>
        <h4 className="text-lg font-semibold mt-4">Sections</h4>
        <ul className="list-disc list-inside space-y-1">
          <li><b>Small Intestine</b>: Comprises the duodenum, jejunum, and ileum; responsible for nutrient absorption.</li>
          <li><b>Large Intestine</b>: Includes the cecum, colon, and rectum; absorbs water and forms feces.</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Functions</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Digestion and absorption of nutrients.</li>
          <li>Water absorption and waste formation.</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Did You Know?</h4>
        <p>The small intestine is about 20 feet long, while the large intestine is about 5 feet long.</p>
      </>
    ),
    reproductiveSystem: (
      <>
        <h3 className="text-xl font-bold mb-2">Reproductive System: Overview</h3>
        <h4 className="text-lg font-semibold mt-4">Male Reproductive System</h4>
        <ul className="list-disc list-inside space-y-1">
          <li><b>Testes</b>: Produce sperm and testosterone.</li>
          <li><b>Penis</b>: Delivers sperm to the female reproductive system.</li>
          <li><b>Prostate</b>: Produces seminal fluid.</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Female Reproductive System</h4>
        <ul className="list-disc list-inside space-y-1">
          <li><b>Ovaries</b>: Produce eggs and hormones (estrogen and progesterone).</li>
          <li><b>Uterus</b>: Houses and nourishes the developing fetus.</li>
          <li><b>Vagina</b>: Birth canal and receptacle for sperm.</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Interesting Fact</h4>
        <p>Females are born with all the eggs they will ever have, approximately 1-2 million.</p>
      </>
    ),
  };
  export default contentData;